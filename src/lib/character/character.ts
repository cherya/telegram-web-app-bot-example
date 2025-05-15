import type { CharacterData, Skill, Item, Slot, Currency } from './types'

export class Character {
  id: string
  name: string
  skills: Skill[]
  inventory: Item[]
  equipped: Record<Slot, Item | null>
  currencies: Currency[]

  constructor(data: CharacterData) {
    this.id = data.id
    this.name = data.name
    this.skills = data.skills
    this.inventory = data.inventory
    this.equipped = data.equipped
    this.currencies = data.currencies
  }

  // helpers
  getSkill(id: string) {
    return this.skills.find(s => s.id === id)
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

export function GenerateRandomCharacter(level: number): Character {
  const id = `char_${Math.random().toString(36).slice(2, 10)}`;
  const name = `Adventurer${Math.floor(Math.random() * 1000)}`;

  const skillNames = [
    'Swordsmanship', 'Archery', 'Magic', 'Stealth', 'Alchemy',
    'Banana Peeling', 'Sock Sorting', 'Extreme Napping', 'Bubble Popping', 'Paperclip Bending',
    'Toothpick Balancing', 'Invisible Ink Writing', 'Left Shoe Tying', 'Ceiling Staring', 'Pencil Dropping'
  ];

  const skillCount = 5;
  const shuffledSkills = skillNames.sort(() => 0.5 - Math.random());
  const skills: Skill[] = shuffledSkills.slice(0, skillCount).map(name => ({
    id: `skill_${Math.random().toString(36).slice(2, 10)}`,
    name,
    level: Math.floor(Math.random() * level) + 1,
    xp: 0,
  }));

  const inventory: Item[] = [];
  const equipped: Record<Slot, Item | null> = {} as Record<Slot, Item | null>;

  const currencies: Currency[] = [
    { id: 'gold', name: 'Gold', amount: 100 * level }
  ];

  return new Character({
    id,
    name,
    skills,
    inventory,
    equipped,
    currencies
  });
}

export async function GetCharacter(id: string): Promise<Character | null> {
  const resp = await fetch(`/api/character`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  });

  let character = await resp.json();

  return character ? new Character(character) : null;
}
