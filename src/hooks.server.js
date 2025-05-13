import { sessionStore } from '$lib/server/session-store'

// Attach authorization to each server request (role may have changed)
async function attachUserToRequestEvent(sessionId, event) {
  const session = await sessionStore.get(sessionId)

  if (session) {
    event.locals.session = session
  } else {
    event.locals.session = {
      valid: false,
      user: {},
    }
  }
}

// Invoked for each endpoint called and initially for SSR router
export const handle = async ({ event, resolve }) => {
  const { cookies } = event
  const sessionId = cookies.get('session')

  // before endpoint or page is called
  if (sessionId) {
    await attachUserToRequestEvent(sessionId, event)
  }

  // TODO: questionable: session key should just expire in redis?
  if (event.locals.session && event.locals.session.expirationDate < Date.now()) {
    console.log('session expired')
    cookies.delete('session', { path: '/' })
  }

  const response = await resolve(event)

  // after endpoint or page is called

  return response
}
