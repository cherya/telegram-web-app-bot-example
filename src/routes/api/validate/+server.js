import { json, error } from '@sveltejs/kit';
import { Validator } from '$lib/server/telegram';
import { sessionStore } from '$lib/server/session-store.js';
import crypto from 'crypto';

/**
 * Represents a user session.
 * @typedef {Object} Session
 * @property {boolean} valid - Indicates if the session is valid.
 * @property {number} expirationDate - The expiration date of the session.
 * @property {User} user - The user object associated with the session.
 */

/**
 * Represents a user.
 * @typedef {Object} User
 * @property {number} id - The unique identifier for the user.
 * @property {string} username - The username of the user.
 * @property {string} first_name - The first name of the user.
 * @property {string} last_name - The last name of the user.
 * @property {number} auth_date - The authentication date as a timestamp.
 * @property {string} hash - A hash representing the user's authentication.
 */

export async function GET({ url, cookies }) {
  await new Promise(r => setTimeout(r, 1000));

  let {isValid, data } = Validator.validateData(url.searchParams.toString(), 60 * 60 * 24 * 30);

  let sessionId = `${crypto.randomUUID()}:${crypto.randomUUID()}`;

  /** @type {Session} */
  const session = {
    valid: isValid,
  };

  if (data.user) {
    let user = JSON.parse(data.user);
    data.user = user;
  }

  if (isValid) {
    /** @type {User} */
    const user = data.user;

    session.user = user;
    session.expirationDate = Date.now() + 60 * 1000;

    sessionStore[sessionId] = session;

    console.log('session', sessionId, session);
    
    cookies.set('session', sessionId, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/'
    })
  }

  return json(session);
};  