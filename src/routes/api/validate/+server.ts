import type { RequestHandler } from '@sveltejs/kit';
import type { Session, User } from '$types/user';

import { SESSION_TTL_SECONDS } from '$env/static/private';

import { json } from '@sveltejs/kit';
import { Validator } from '$lib/server/telegram';
import { sessionStore } from '$lib/server/session-store';
import crypto from 'crypto';


const ttl = parseInt(SESSION_TTL_SECONDS) || 60 * 5; // Default to 5 minutes if not set

export const GET: RequestHandler = async ({ url, cookies, locals }) => {
  if (locals.session) {
    return json(locals.session);
  }

  // new session
  const { isValid, data } = Validator.validateData(url.searchParams.toString(), 60 * 60); // 1 hour

  const session: Session = {
    valid: isValid,
    user: {} as User,
  };

  if (isValid) {
    const sessionId = `${crypto.randomUUID()}:${crypto.randomUUID()}`;
    const user: User = JSON.parse(data.user);

    session.user = user;
    session.expirationDate = Date.now() + ttl * 1000;

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

  return json(session);
};


