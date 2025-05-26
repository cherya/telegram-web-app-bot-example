import type { RequestHandler } from '@sveltejs/kit';
import type { Session, User } from '$lib/user/user';
import type { ServerLoadEvent } from '@sveltejs/kit';

import { newCookieSession } from '$lib/session';

import { json, error } from '@sveltejs/kit';
import { Validator } from '$lib/server/telegram';

export const GET: RequestHandler = async ({ url, cookies, locals }: ServerLoadEvent) => {
  // if session exists, return it
  if (locals.session) {
    return json(locals.session);
  }

  // if not – create new session
  const validationResult = Validator.validateData(url.searchParams.toString(), 60 * 60 * 12); // 12 hours

  let session: Session;

  if (validationResult.valid) {
    const user: User = JSON.parse(validationResult.data.user);

    session = await newCookieSession(user, cookies);
  } else {
    return error(401, validationResult.error || 'Telegram validation unexpected error');
  }

  return json(session);
};

