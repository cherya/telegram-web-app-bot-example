import { GetCharacterById } from '$lib/character/api'

const wrapAsyncState = (data, loading = false, error = null) => ({
  data,
  loading,
  error
})

export const load = async ({ locals, fetch, params }) => {
  const { session } = locals // locals.session set by hooks.server.ts/handle(), undefined if not logged in

  if (!session) {
    console.log('session not found on page load')

    return {
      character: wrapAsyncState({}, true),
    }
  }

  const character = await GetCharacterById(params.slug, fetch)

  return {
    character: wrapAsyncState(character, false),
  }
}

export const prerender = false;
