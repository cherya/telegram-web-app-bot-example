import { Character } from '$lib/character/character'
import { Activities } from '$lib/activities/activities-list'
import type { Activity } from '$lib/activities/types'
import { simulateActivityTick } from '$lib/activities/activities'

export function runServerSimulation(character: Character, now: number): Character {
  let result = structuredClone(character)
  let currentTime = result.lastSyncAt
  let activity: Activity | undefined = result.currentActivity ? Activities[result.currentActivity] : undefined

  while (currentTime + activity.baseTickDuration <= now) {
    currentTime += Activities[result.currentActivity!].baseTickDuration
    result = simulateActivityTick(result, result.currentActivity!, new Date(currentTime))
  }

  result.lastSyncAt = now
  return result
}

