import { json, error } from '@sveltejs/kit';
import { characterStore } from '$lib/server/character-store';
import { GenerateRandomCharacter } from '$lib/character/character';
import type { ServerLoadEvent } from '@sveltejs/kit';

export async function GET({ locals }: ServerLoadEvent) {
  if (!locals.session) {
    return error(401, 'Unauthorized');
  }

  const characters = await characterStore.list(String(locals.session.user.id));

  if (!characters.length) {
    let char = GenerateRandomCharacter(1);
    await characterStore.set(String(locals.session.user.id), char);

    return json([char]);
  }

  return json(characters);
};
