import type { Character } from './character'

export async function GetCharacter(id: string, fetchFn?: typeof fetch): Promise<Character | null> {
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
    throw new Error(`Cannot get character: ${respData.message}`)
  }

  let character = await resp.json();

  return character;
}

export async function GetCharacterById(charId: string, fetchFn?: typeof fetch): Promise<Character | null> {
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

export async function GetCharacters(fetchFn?: typeof fetch): Promise<Character[]> {
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
