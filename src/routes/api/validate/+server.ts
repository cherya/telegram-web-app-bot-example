import type { RequestHandler } from '@sveltejs/kit';
import type { Session, User } from '$types/user';

import { newCookieSession } from '$lib/session';

import { json, error } from '@sveltejs/kit';
import { Validator } from '$lib/server/telegram';

export const GET: RequestHandler = async ({ url, cookies, locals }) => {
  // if session exists, return it
  if (locals.session) {
    return json(locals.session);
  }

  // if not – create new session
  const validationResult = Validator.validateData(url.searchParams.toString(), 60 * 60 * 12); // 1 hour

  let session: Session;

  if (validationResult.isValid) {
    const user: User = JSON.parse(validationResult.data.user);

    session = await newCookieSession(user, cookies);
  } else {
    return error(401, validationResult.error || 'Telegram validation error');
  }

  return json(session);
};

