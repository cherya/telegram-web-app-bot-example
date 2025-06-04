import type { CharacterData } from '$lib/character/types';
import { Character } from '$lib/character/character';
import { useAsyncStore } from '$lib/stores/use-async-store';
import { Activities } from '$lib/activities/activities-list';
import { activityTick } from '$lib/activities/activities';
import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { ActivityTimelineEntry } from '$lib/activities/types';

const STORE_NAME = 'character';
const TIMELINE_STORAGE_KEY = 'character_timeline';
const DEFAULT_TICK_DURATION = 5000;

export interface CharacterStoreState {
  loading: boolean;
  error?: string;
  data: CharacterData;
}

class ActivityTimeline {
  private timeline: ActivityTimelineEntry[] = [];

  constructor() {
    if (browser) {
      this.loadTimeline();
    }
  }

  private loadTimeline(): void {
    const stored = localStorage.getItem(TIMELINE_STORAGE_KEY);
    if (stored) {
      try {
        this.timeline = JSON.parse(stored);
      } catch (e) {
        console.error('Failed to load activity timeline:', e);
        this.timeline = [];
      }
    }
  }

  private saveTimeline(): void {
    try {
      localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(this.timeline));
    } catch (e) {
      console.error('Failed to save activity timeline:', e);
    }
  }

  public recordActivityStart(activityId: string): void {
    console.log(`Recording activity start: ${activityId}`, this.timeline);
    // Close any unclosed activities
    this.timeline = this.timeline.map(entry =>
      entry.endTime ? entry : { ...entry, endTime: Date.now() }
    );

    // Add new activity
    this.timeline.push({
      activityId,
      startTime: Date.now()
    });

    this.saveTimeline();
  }

  public recordActivityStop(): void {
    if (this.timeline.length > 0) {
      const lastEntry = this.timeline[this.timeline.length - 1];
      if (!lastEntry.endTime) {
        lastEntry.endTime = Date.now();
        this.saveTimeline();
      }
    }
  }

  public getTimeline(): ActivityTimelineEntry[] {
    return [...this.timeline];
  }

  public clearTimeline(): void {
    try {
      localStorage.setItem(TIMELINE_STORAGE_KEY, '[]');
      this.timeline = [];
    } catch (e) {
      console.error('Failed to clear activity timeline:', e);
    }

    console.log('Activity timeline cleared', this.timeline);
  }
}

interface ActivityManager {
  start: (activityId: string) => void;
  stop: () => void;
  progress: Writable<number>;
}

class CharacterActivityManager implements ActivityManager {
  private animFrame: number | null = null;
  private interval: ReturnType<typeof setInterval> | null = null;
  private tickDuration: number = DEFAULT_TICK_DURATION;
  private lastTick: number;

  public timeline: ActivityTimeline;
  public progress: Writable<number>;

  constructor(
    private store: ReturnType<typeof useAsyncStore>,
    initialLastSync: number
  ) {
    this.lastTick = initialLastSync;
    this.progress = writable(0);
    this.timeline = new ActivityTimeline();
  }

  private animateProgress = () => {
    const now = Date.now();
    const elapsed = now - this.lastTick;
    const progressValue = Math.min(elapsed / this.tickDuration, 1);
    this.progress.set(progressValue);
    this.animFrame = requestAnimationFrame(this.animateProgress);
  };

  private handleActivityTick = () => {
    const char = new Character(this.store.get().data);
    this.lastTick = Date.now();
    const updatedChar = activityTick(char, char.currentActivity, new Date());
    this.store.update(state => ({ ...state, data: { ...updatedChar } }));
  };

  public start(activityId: string): void {
    const currentState = this.store.get().data;

    if (currentState.currentActivity !== activityId) {
      this.stop();
    }

    this.timeline.recordActivityStart(activityId);

    this.store.update(state => ({
      ...state,
      data: { ...currentState, currentActivity: activityId }
    }));

    console.log(`Starting activity: ${activityId}`);

    const activity = Activities[activityId];
    this.tickDuration = activity.baseTickDuration;

    this.animFrame = requestAnimationFrame(this.animateProgress);

    const now = Date.now();
    const elapsed = now - this.lastTick;
    const firstTickDelay = Math.max(this.tickDuration - elapsed, 0);

    // Schedule first tick
    this.interval = setTimeout(() => {
      this.handleActivityTick();
      // Set up subsequent ticks
      this.interval = setInterval(this.handleActivityTick, this.tickDuration);
    }, firstTickDelay);
  }

  public stop(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

    this.timeline.recordActivityStop();

    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }

    this.lastTick = Date.now();
    const currentState = this.store.get().data;

    console.log(`Stopping activity: ${currentState.currentActivity}`);

    this.store.update(state => ({
      ...state,
      data: {
        ...currentState,
        currentActivity: null
      }
    }));
  }
}

export function CharStore(
  initialData: CharacterStoreState = { loading: true, data: {} as CharacterData }
) {
  const store = useAsyncStore(STORE_NAME, initialData);
  const activityManager = new CharacterActivityManager(store, initialData.data.lastSyncAt);

  return {
    ...store,
    startActivity: activityManager.start.bind(activityManager),
    stopActivity: activityManager.stop.bind(activityManager),
    progress: activityManager.progress,
    getActivityTimeline: () => activityManager.timeline.getTimeline(),
    clearActivityTimeline: () => activityManager.timeline.clearTimeline(),
  };
}

