import { json, error } from '@sveltejs/kit';
import { characterStore } from '$lib/server/character-store';

export async function GET({ locals, params }) {
  if (!locals.session) {
    return error(401, 'Unauthorized');
  }

  const char = await characterStore.get(locals.session.user.id, params.slug);

  return json(char);
};
