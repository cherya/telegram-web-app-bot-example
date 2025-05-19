import { useAsyncStore } from '$lib/stores/use-async-store'
import { CheckInitData } from '$lib/user/api'
import type { User } from '$types/user'

const name = 'tg-user'

export interface UserData {
  valid?: boolean
  user: User
  characters?: string[]
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
    const resp = await CheckInitData(initialData)
    store.set({ loading: false, error: null, data: resp })
  } catch (err) {
    store.set({ loading: false, error: String(err), data: {} as UserData })
  }
}
