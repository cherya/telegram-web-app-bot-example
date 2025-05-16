import { sessionStore } from '$lib/server/session-store'

// Attach authorization to each server request 
async function attachUserToRequestEvent(sessionId, event) {
  let session = await sessionStore.get(sessionId)

  // refresh session
  console.log(session.expirationDate - Date.now() + 60 * 1 * 1000);

  const { cookies } = event

  if (session.expirationDate && session.expirationDate < Date.now() + 30 * 1000) { // 1 minute 
    const sessionId = `${crypto.randomUUID()}:${crypto.randomUUID()}`;

    session = {
      user: session.user,
      valid: true,
      expirationDate: Date.now() + 60 * 1 * 1000, // 1 minute
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
