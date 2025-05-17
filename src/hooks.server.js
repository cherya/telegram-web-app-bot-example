import { sessionStore } from '$lib/server/session-store'
import { sessionTTL } from '$constants';
import { newCookieSession } from '$lib/session';

// Attach authorization to each server request 
async function attachUserToRequestEvent(sessionId, event) {
  let session = await sessionStore.get(sessionId)

  const { cookies } = event

  if (session && session.expirationDate && session.expirationDate < Date.now() + (sessionTTL / 2)) { // halfway through the TTL
    session = await newCookieSession(session.user, cookies)
  }

  event.locals.session = session || { valid: false, user: {} }
}

// Invoked for each endpoint called and initially for SSR router
export const handle = async ({ event, resolve }) => {
  const { cookies } = event
  const sessionId = cookies.get('session');

  // before endpoint or page is called 
  if (sessionId) {
    await attachUserToRequestEvent(sessionId, event);
  }

  const response = await resolve(event)

  // after endpoint or page is called

  return response
}
