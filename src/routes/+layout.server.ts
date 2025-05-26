import { GetCharacters } from '$lib/character/api'
import type { ServerLoadEvent } from '@sveltejs/kit';
import type { User } from '$lib/user/user'
import type { CharacterData } from '$lib/character/types'

interface PageData {
  user: User,
  characters: CharacterData[]
}

const wrapAsyncState = (data: PageData, loading = false, error = null) => ({
  data,
  loading,
  error
})

export const load = async ({ locals, fetch }: ServerLoadEvent) => {
  const { session } = locals // locals.session set by hooks.server.ts/handle(), undefined if not logged in

  if (!session) {
    return {
      user: wrapAsyncState({ user: null, characters: null }, true),
    }
  }

  const charactersList = await GetCharacters(fetch)

  return {
    user: wrapAsyncState({
      user: session.user,
      characters: charactersList,
    }, false),
  }
}
