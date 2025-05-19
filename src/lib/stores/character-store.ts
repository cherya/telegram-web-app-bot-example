import type { CharacterData } from '$lib/character/types';
import { useAsyncStore } from '$lib/stores/use-async-store'
import { GetCharacter } from '$lib/character/api'

const name = 'character'

export interface CharacterStoreState {
  loading: boolean
  error?: string
  data: CharacterData
}

export const CharStore = (initialData: CharacterStoreState = { loading: true, data: {} as CharacterData }) => useAsyncStore(name, initialData)

export const initCharacter = async (store: {
  get: () => CharacterStoreState
  set: (state: CharacterStoreState) => void
}, characterId: string) => {
  const current = store.get()

  if (current.data?.id) {
    // already valid, skip re-fetch
    return
  }

  store.set({ loading: true, error: null, data: {} as CharacterData })

  try {
    const resp = await GetCharacter(characterId)
    store.set({ loading: false, error: null, data: resp })
  } catch (err) {
    store.set({ loading: false, error: String(err), data: {} as CharacterData })
  }
}
