import type { Activity } from './types'

export const Fishing: Activity = {
  id: 'fishing',
  name: 'Fishing',
  baseTickDuration: 10000,
  baseXp: 12,
  tick(character, t: Date) {
    const skill = character.getSkill('Fishing')
    if (skill) skill.xp += this.baseXp
    return character
  }
}
