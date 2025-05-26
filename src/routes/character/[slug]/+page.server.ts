import { GetCharacterById } from '$lib/character/api'
import type { CharacterData } from '$lib/character/types'
import type { ServerLoadEvent } from '@sveltejs/kit';

const wrapAsyncState = (data: CharacterData, loading = false, error = null) => ({
  data,
  loading,
  error
})

export const load = async ({ locals, fetch, params }: ServerLoadEvent) => {
  const { session } = locals // locals.session set by hooks.server.ts/handle(), undefined if not logged in

  if (!session) {
    return {
      character: wrapAsyncState({} as CharacterData, true),
    }
  }

  const character = await GetCharacterById(params.slug, fetch)

  return {
    character: wrapAsyncState(character, false),
  }
}

export const prerender = false;
