import type { CharacterData } from '$lib/character/types';
import { Character } from '$lib/character/character';
import { useAsyncStore } from '$lib/stores/use-async-store'
import { GetCharacterById } from '$lib/character/api'
import { Activities } from '$lib/activities/activities-list'
import { activityTick } from '$lib/activities/activities'
import { writable } from 'svelte/store';

const name = 'character'

export interface CharacterStoreState {
  loading: boolean
  error?: string
  data: CharacterData
}

export const CharStore = function (initialData: CharacterStoreState = { loading: true, data: {} as CharacterData }) {
  const store = useAsyncStore(name, initialData)
  const { get, update } = store

  const progress = writable(0)

  let lastTick = initialData.data.lastSyncAt
  let animFrame: any
  let interval: ReturnType<typeof setInterval>
  let tickDuration = 5000 // Default tick duration in milliseconds

  function animateProgress() {
    const now = Date.now()
    const elapsed = now - lastTick
    const p = Math.min(elapsed / tickDuration, 1)
    progress.set(p)
    animFrame = requestAnimationFrame(animateProgress)
  }

  function startActivity(activityId: string) {
    let char = store.get().data

    if (char.currentActivity !== activityId) {
      stopActivity()
    }

    update((state) => ({ ...state, data: { ...char, currentActivity: activityId } }))

    char = store.get().data

    console.log(`Starting activity: ${activityId}`)
    animFrame = requestAnimationFrame(animateProgress)

    const activity = Activities[activityId]

    tickDuration = activity.baseTickDuration

    const now = Date.now()
    const elapsed = now - lastTick
    const firstTickDelay = Math.max(tickDuration - elapsed, 0)

    // First tick (may be shorter)
    interval = setTimeout(() => {
      let char = store.get().data

      lastTick = Date.now()
      char = activityTick(char, activityId, new Date())
      console.log(`Activity tick: ${activityId}`, char)
      update((state) => ({ ...state, data: { ...char } }))

      // Subsequent ticks at normal interval
      interval = setInterval(() => {
        let char = new Character(store.get().data)

        lastTick = Date.now()
        char = activityTick(char, activityId, new Date())
        console.log(`Activity tick: ${activityId}`, char)
        update((state) => ({ ...state, data: { ...char } }))
      }, tickDuration)
    }, firstTickDelay)
  }

  function stopActivity() {
    clearInterval(interval)
    interval = undefined
    lastTick = Date.now()

    let char = store.get().data

    console.log(`Stopping activity: ${char.currentActivity}`)

    update((state) => ({ ...state, data: { ...char, currentActivity: null } }))

    cancelAnimationFrame(animFrame)
  }

  return {
    startActivity,
    stopActivity,
    ...store,
    progress,
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
