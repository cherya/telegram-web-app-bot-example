import { json, error } from '@sveltejs/kit';
import { characterStore } from '$lib/server/character-store';
import { GenerateRandomCharacter } from '$lib/character/character';

export async function GET({ locals }) {
  if (!locals.session) {
    return error(401, 'Unauthorized');
  }

  let character = await characterStore.get(locals.session.user.id);

  if (!character) {
    character = GenerateRandomCharacter(1);
    await characterStore.set(locals.session.user.id, character);
  }

  return json(character);
};
