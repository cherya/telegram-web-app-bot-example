import { Character } from '$lib/character/character'
import { Activities } from '$lib/activities/activities-list'

export function activityTick(character: Character, activityId: string, now: Date): Character {
  const activity = Activities[activityId]
  if (!activity) return character

  const cloned = new Character(structuredClone(character))

  activity.tick(cloned, now)

  return cloned
}


