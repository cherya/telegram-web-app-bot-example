import type { CharacterData, Skill, Item, Slot, Currency, BaseStat } from './types'

export class Character {
  id: string
  name: string
  skills: Skill[]
  stats: BaseStat[]
  inventory: Item[]
  equipped: Record<Slot, Item | null>
  currencies: Currency[]

  lastSyncAt: number

  currentActivity: string | null = null

  constructor(data: CharacterData) {
    this.id = data.id
    this.name = data.name
    this.stats = data.stats
    this.skills = data.skills
    this.inventory = data.inventory
    this.equipped = data.equipped
    this.currencies = data.currencies
    this.lastSyncAt = data.lastSyncAt
    this.currentActivity = data.currentActivity || null
  }

  getSkill(name: string) {
    return this.skills.find(s => s.name === name)
  }

  getCurrency(id: string) {
    return this.currencies.find(c => c.id === id)
  }

  getEquipped(slot: string) {
    return this.equipped[slot] ?? null
  }

  addItem(item: Item) {
    this.inventory.push(item)
  }

  addCurrency(id: string, amount: number) {
    const c = this.getCurrency(id)
    if (c) c.amount += amount
    else this.currencies.push({ id, name: id, amount })
  }

  equipItem(item: Item) {
    if (!item.slot) throw new Error("Can't equip item without slot")
    this.equipped[item.slot] = item
    this.inventory = this.inventory.filter(i => i.id !== item.id)
  }
}

export function GenerateRandomCharacter(level: number): CharacterData {
  const id = `char_${Math.random().toString(36).slice(2, 10)}`;
  const name = `Adventurer${Math.floor(Math.random() * 1000)}`;

  const skillNames = [
    'Mining', 'Fishing', 'Woodcutting', 'Smithing', 'Herbalism',
  ];

  const skillCount = 5;
  const shuffledSkills = skillNames.sort(() => 0.5 - Math.random());
  const skills: Skill[] = shuffledSkills.slice(0, skillCount).map(name => ({
    id: `skill_${Math.random().toString(36).slice(2, 10)}`,
    name,
    level: Math.floor(Math.random() * level) + 1,
    xp: 0,
  }));

  const stats: BaseStat[] = [
    { name: 'Strength', level: 1 },
    { name: 'Dexterity', level: 1 },
    { name: 'Intelligence', level: 1 },
    { name: 'Constitution', level: 1 },
    { name: 'Wisdom', level: 1 },
  ]

  const inventory: Item[] = [];
  const equipped: Record<Slot, Item | null> = {} as Record<Slot, Item | null>;

  const currencies: Currency[] = [
    { id: 'gold', name: 'Gold', amount: 100 * level }
  ];

  return {
    id,
    name,
    stats,
    skills,
    inventory,
    equipped,
    currencies,
    currentActivity: null,
    lastSyncAt: Date.now(),
  };
}

