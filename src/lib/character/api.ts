import type { CharacterData } from './types'

export async function GetCharacterById(charId: string, fetchFn?: typeof fetch): Promise<CharacterData | null> {
  const _fetch = fetchFn ?? fetch

  const resp = await _fetch(`/api/character/${charId}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  });

  if (!resp.ok) {
    const respData = await resp.json();
    throw new Error(`Cannot get character: ${respData.message}`)
  }

  let character = await resp.json();

  return character;
}

export async function GetCharacters(fetchFn?: typeof fetch): Promise<CharacterData[]> {
  const _fetch = fetchFn ?? fetch

  const resp = await _fetch(`/api/character`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  });

  if (!resp.ok) {
    const respData = await resp.json();
    throw new Error(`Cannot get characters: ${respData.message}`)
  }

  return await resp.json();
}
