import type { Activity } from './types'

export const Smithing: Activity = {
  id: 'smithing',
  name: 'Smithing',
  baseTickDuration: 8000,
  baseXp: 8,
  tick(character, t: Date) {
    const skill = character.getSkill('Smithing')
    if (skill) skill.xp += this.baseXp
    return character
  }
}
