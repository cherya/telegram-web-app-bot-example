import type { RequestHandler } from '@sveltejs/kit';
import type { Session, User } from '$types/user';

import { json } from '@sveltejs/kit';
import { Validator } from '$lib/server/telegram';
import { sessionStore } from '$lib/server/session-store';
import crypto from 'crypto';


const sessionTTL = 60 * 1 * 1000; // 1 minute

export const GET: RequestHandler = async ({ url, cookies, locals }) => {
  if (locals.session) {
    // refresh session

    console.log(locals.session.expirationDate);
    console.log(Date.now() + 60 * 1 * 1000);

    if (locals.session.expirationDate && locals.session.expirationDate < Date.now() + 30 * 1000) { // 1 minute 
      const sessionId = `${crypto.randomUUID()}:${crypto.randomUUID()}`;

      const session: Session = {
        user: locals.session.user,
        valid: true,
        expirationDate: Date.now() + sessionTTL
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

      locals.session = session;
    }

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
    session.expirationDate = Date.now() + sessionTTL;

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


