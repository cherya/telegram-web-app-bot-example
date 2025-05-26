import { useWritable } from './use-shared-store.js'
import { get } from 'svelte/store'
import type { CharacterData } from '$lib/character/types'

export function useAsyncStore(name: string, initialData: any = null) {
  const store = useWritable(name, {
    loading: false,
    error: null,
    data: initialData
  })

  return {
    ...store,
    get: () => get(store),
  }
}
