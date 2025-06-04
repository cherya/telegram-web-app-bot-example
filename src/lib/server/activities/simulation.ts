import { Character } from '$lib/character/character'
import { Activities } from '$lib/activities/activities-list'
import type { Activity, ActivityTimelineEntry } from '$lib/activities/types'
import { activityTick } from '$lib/activities/activities'

export function runServerSimulation(character: Character, activityTimeline: ActivityTimelineEntry[], now: number): Character {
  const startedAt = now;
  let charClone = structuredClone(character)
  let currentTime = charClone.lastSyncAt

  console.log(`Simulating character ${charClone.name} from ${charClone.lastSyncAt} to ${now} (${now - charClone.lastSyncAt}ms)`);

  // Sort timeline entries by startTime to ensure correct order
  const sortedTimeline = [...activityTimeline].sort((a, b) => a.startTime - b.startTime);

  for (const timelineEntry of sortedTimeline) {
    if (!timelineEntry.activityId) continue; // Skip null activities

    const activity = Activities[timelineEntry.activityId];
    const entryEndTime = timelineEntry.endTime || now;

    // Only process if the entry intersects with our simulation window
    if (entryEndTime > currentTime && timelineEntry.startTime < now) {
      // Set the current activity
      charClone.currentActivity = timelineEntry.activityId;

      // Simulate ticks until we reach either the end of this activity or the current time
      while (currentTime + activity.baseTickDuration <= Math.min(entryEndTime, now)) {
        currentTime += activity.baseTickDuration;
        charClone = activityTick(charClone, timelineEntry.activityId, new Date(currentTime));
        charClone.lastSyncAt = currentTime;
      }
    }
  }

  console.log(`Character ${charClone.name} simulation took ${(Date.now() - startedAt) / 1000}s`);
  return charClone;
}
