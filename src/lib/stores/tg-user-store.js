import { useAsyncStore } from '$lib/stores/use-async-store'
import { CheckInitData, TgApp } from '$lib/telegram'

const name = 'tg-user'

export const TgUserStore = (initialData) => useAsyncStore(name, initialData)

export const initTgUser = async (store) => {
  const current = store.get()

  if (current.data?.valid) {
    // already valid, skip re-fetch
    return
  }

  store.set({ loading: true, error: null, data: {} })

  try {
    const resp = await CheckInitData()
    store.set({ loading: false, error: null, data: resp })

    TgApp.init()
    TgApp.ready()
  } catch (err) {
    store.set({ loading: false, error: String(err), data: {} })
  }
}

