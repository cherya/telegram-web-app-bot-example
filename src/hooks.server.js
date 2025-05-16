import { sessionStore } from '$lib/server/session-store'
import { SESSION_TTL_SECONDS } from '$env/static/private';

const ttl = parseInt(SESSION_TTL_SECONDS) || 60 * 5; // Default to 5 minutes if not set

// Attach authorization to each server request 
async function attachUserToRequestEvent(sessionId, event) {
  let session = await sessionStore.get(sessionId)

  const { cookies } = event

  if (session.expirationDate && session.expirationDate < Date.now() + (ttl * 1000 / 2)) { // halfway through the TTL
    const sessionId = `${crypto.randomUUID()}:${crypto.randomUUID()}`;

    session = {
      user: session.user,
      valid: true,
      expirationDate: Date.now() + ttl * 1000,
    }

    await sessionStore.set(sessionId, session);

    cookies.set('session', sessionId, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      partitioned: true,
      expires: new Date(session.expirationDate),
      path: '/'
    });
  }

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
  const sessionId = cookies.get('session');

  // before endpoint or page is called 
  if (sessionId) {
    await attachUserToRequestEvent(sessionId, event);
  }

  const response = await resolve(event)

  // after endpoint or page is called

  return response
}
