import type { Activity } from './types'

export const Woodcutting: Activity = {
  id: 'woodcutting',
  name: 'Woodcutting',
  baseTickDuration: 3000,
  baseXp: 3,
  tick(character, t: Date) {
    const skill = character.getSkill('Woodcutting')
    if (skill) skill.xp += this.baseXp
    return character
  }
}
