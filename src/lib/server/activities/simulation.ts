import { Character } from '$lib/character/character'
import { Activities } from '$lib/activities/activities-list'
import type { Activity } from '$lib/activities/types'
import { activityTick } from '$lib/activities/activities'

export function runServerSimulation(character: Character, now: number): Character {
  const startedAt = now;
  let charClone = structuredClone(character)
  let currentTime = charClone.lastSyncAt
  let activity: Activity | undefined = charClone.currentActivity ? Activities[charClone.currentActivity] : undefined

  console.log(`Simulating character ${charClone.name} from ${charClone.lastSyncAt} to ${Date.now()} (${Date.now() - charClone.lastSyncAt})`);

  while (currentTime + activity.baseTickDuration <= now) {
    currentTime += Activities[charClone.currentActivity!].baseTickDuration
    charClone = activityTick(charClone, charClone.currentActivity!, new Date(currentTime))
    charClone.lastSyncAt = currentTime
  }

  console.log(`Character ${charClone.name} simulation took ${(Date.now() - startedAt) / 1000}s`);

  return charClone
}

