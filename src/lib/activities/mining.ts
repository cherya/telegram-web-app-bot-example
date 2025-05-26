import type { Activity } from './types'

export const Mining: Activity = {
  id: 'mining',
  name: 'Mining',
  baseTickDuration: 5000,
  baseXp: 5,
  tick(character, t: Date) {
    const skill = character.getSkill('Mining')
    if (skill) skill.xp += this.baseXp
    return character
  }
}
