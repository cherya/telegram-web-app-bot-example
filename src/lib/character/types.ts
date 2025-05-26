export type Skill = {
  id: string
  name: string
  level: number
  xp: number
}
export type BaseStat = {
  name: 'Strength' | 'Dexterity' | 'Intelligence' | 'Constitution' | 'Wisdom'
  level: number
}

export type ItemType = 'wearable' | 'misc' | 'resource'

export type Slot = 'head' | 'body' | 'legs' | 'feet' | 'hands' | 'left_hand' | 'right_hand'

export type Item = {
  id: string
  name: string
  description: string
  type: ItemType
  slot?: Slot // only if equippable
}

export type Currency = {
  id: string
  name: string
  amount: number
}

export type CharacterData = {
  id: string
  name: string
  stats: BaseStat[]
  skills: Skill[]
  inventory: Item[]
  equipped: { [K in Slot]: Item | null }
  currencies: Currency[]

  lastSyncAt?: number
}
