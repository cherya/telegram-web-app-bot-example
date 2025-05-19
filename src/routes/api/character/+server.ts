import { json, error } from '@sveltejs/kit';
import { characterStore } from '$lib/server/character-store';
import { GenerateRandomCharacter } from '$lib/character/character';

export async function GET({ locals }) {
  if (!locals.session) {
    return error(401, 'Unauthorized');
  }

  const characters = await characterStore.list(locals.session.user.id);

  if (!characters.length) {
    let char = GenerateRandomCharacter(1);
    await characterStore.set(locals.session.user.id, char);

    return json([char]);
  }

  return json(characters);
};
