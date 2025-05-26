import { json, error } from '@sveltejs/kit';
import { characterStore } from '$lib/server/character-store';
import type { ServerLoadEvent } from '@sveltejs/kit';

export async function GET({ locals, params }: ServerLoadEvent) {
  if (!locals.session) {
    return error(401, 'Unauthorized');
  }

  const char = await characterStore.get(String(locals.session.user.id), params.slug);

  return json(char);
};
