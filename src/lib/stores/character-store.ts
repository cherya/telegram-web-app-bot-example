import type { CharacterData } from '$lib/character/types';
import { Character } from '$lib/character/character';
import { useAsyncStore } from '$lib/stores/use-async-store';
import { Activities } from '$lib/activities/activities-list';
import { activityTick } from '$lib/activities/activities';
import { writable, type Writable } from 'svelte/store';

const STORE_NAME = 'character';
const DEFAULT_TICK_DURATION = 5000;

export interface CharacterStoreState {
  loading: boolean;
  error?: string;
  data: CharacterData;
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
  public progress: Writable<number>;

  constructor(
    private store: ReturnType<typeof useAsyncStore>,
    initialLastSync: number
  ) {
    this.lastTick = initialLastSync;
    this.progress = writable(0);
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
    progress: activityManager.progress
  };
}

