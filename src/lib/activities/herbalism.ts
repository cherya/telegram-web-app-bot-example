import type { Activity } from './types'

export const Herbalism: Activity = {
  id: 'herbalism',
  name: 'Herbalism',
  baseTickDuration: 1000,
  baseXp: 2,
  tick(character, t: Date) {
    const skill = character.getSkill('Herbalism')
    if (skill) skill.xp += this.baseXp
    return character
  }
}
