import type { User, Session } from '$lib/user/user';
import { sessionStore } from '$lib/server/session-store';
import type { Cookies } from '@sveltejs/kit';
import { sessionTTL } from '$constants';

export async function newCookieSession(user: User, cookies: Cookies): Promise<Session> {
  const sessionId = `${crypto.randomUUID()}:${crypto.randomUUID()}`;

  const session = {
    user: user,
    expirationDate: Date.now() + sessionTTL,
  }

  await sessionStore.set(sessionId, session);

  cookies.set('session', sessionId, {
    httpOnly: true,
    sameSite: 'none',
    partitioned: true,
    secure: true,
    expires: new Date(session.expirationDate),
    path: '/'
  });

  return session;
}
