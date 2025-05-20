import { useAsyncStore } from '$lib/stores/use-async-store'
import { CheckInitData } from '$lib/user/api'
import { GetCharacters } from '$lib/character/api'
import type { User } from '$types/user'
import type { CharacterData } from '$lib/character/types'

const name = 'tg-user'

export interface UserData {
  valid?: boolean
  user: User
  characters?: CharacterData[]
}

export interface UserStoreState {
  loading: boolean
  error: string | null
  data: UserData
}

export const UserStore = (initialData?: UserStoreState) => useAsyncStore(name, initialData)

export const initUser = async (store: {
  get: () => UserStoreState
  set: (state: UserStoreState) => void
}, initialData: string) => {
  const current = store.get()

  if (current.data?.valid) {
    // already valid, skip re-fetch
    return
  }

  store.set({ loading: true, error: null, data: {} as UserData })

  try {
    const user = await CheckInitData(initialData)
    const characters = await GetCharacters()

    store.set({
      loading: false, error: null, data: {
        user: user.user,
        valid: user.valid,
        characters: characters
      }
    })
  } catch (err) {
    store.set({ loading: false, error: String(err), data: {} as UserData })
  }
}
