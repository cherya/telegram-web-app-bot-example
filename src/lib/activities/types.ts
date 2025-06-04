import { Character } from '$lib/character/character'

export type Activity = {
  id: string
  name: string
  baseTickDuration: number
  baseXp: number
  seed?: string
  tick: (character: Character, t: Date) => Character
}

export type ActivityTimelineEntry = {
  activityId: string | null;
  startTime: number;  // Unix timestamp in ms
  endTime?: number;   // Unix timestamp in ms
};
