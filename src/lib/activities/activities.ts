import { Character } from '$lib/character/character'
import { Activities } from '$lib/activities/activities-list'
import type { Activity } from './types'

export function simulateActivityTick(character: Character, activityId: string, now: Date): Character {
  const activity = Activities[activityId]
  if (!activity) return character

  // you can add per-tick scaling, randomness, etc here
  const cloned = new Character(structuredClone(character))
  return new Character(activity.tick(cloned, now)) // inject current time if needed
}


