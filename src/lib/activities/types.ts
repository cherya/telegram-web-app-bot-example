import { Character } from '$lib/character/character'

export type Activity = {
  id: string
  name: string
  baseTickDuration: number
  baseXp: number
  seed?: string
  tick: (character: Character, t: Date) => Character
}
