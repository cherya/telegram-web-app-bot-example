import type { CharacterData } from '$lib/character/types';
import { Character } from '$lib/character/character';
import { useAsyncStore } from '$lib/stores/use-async-store'
import { GetCharacterById } from '$lib/character/api'
import { Activities } from '$lib/activities/activities-list'
import { simulateActivityTick } from '$lib/activities/activities'

const name = 'character'

export interface CharacterStoreState {
  loading: boolean
  error?: string
  data: CharacterData
}

export const CharStore = function (initialData: CharacterStoreState = { loading: true, data: {} as CharacterData }) {
  const store = useAsyncStore(name, initialData)
  const { update } = store

  let interval: ReturnType<typeof setInterval>

  function startActivity(activityId: string) {
    if (interval) return

    let char = new Character(store.get().data)

    console.log(`Starting activity: ${activityId}`)

    const activity = Activities[activityId]

    interval = setInterval(() => {
      char = simulateActivityTick(char, activityId, new Date())

      console.log(`Activity tick: ${activityId}`, char)

      update((state) => ({ ...state, data: { ...char } }))
    }, activity.baseTickDuration)
  }

  function stopActivity() {
    clearInterval(interval)
    interval = undefined
  }

  return {
    startActivity,
    stopActivity,
    ...store,
  }
}

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
    const resp = await GetCharacterById(characterId)
    store.set({ loading: false, error: null, data: resp })
  } catch (err) {
    store.set({ loading: false, error: String(err), data: {} as CharacterData })
  }
}
