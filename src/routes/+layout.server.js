import { GetCharacters } from '$lib/character/api'

const wrapAsyncState = (data, loading = false, error = null) => ({
  data,
  loading,
  error
})

export const load = async ({ locals, fetch }) => {
  const { session } = locals // locals.session set by hooks.server.ts/handle(), undefined if not logged in

  if (!session) {
    return {
      user: wrapAsyncState({ user: {}, valid: null }, true),
      charactersList: [],
    }
  }

  const charactersList = await GetCharacters(fetch, true)

  return {
    user: wrapAsyncState({ user: session.user, valid: true }, false),
    charactersList: charactersList,
  }
}
