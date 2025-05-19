import { KV_REST_API_URL, KV_REST_API_TOKEN } from "$env/static/private";
import type { CharacterData } from "$lib/character/types";
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: KV_REST_API_URL || "",
  token: KV_REST_API_TOKEN || ""
});

function makeId(userId: string, charId: string): string {
  return `character:${userId}:${charId}`;
}

class CharacterStore {
  private client: Redis;

  constructor() {
    this.client = redis;
  }

  async set(userId: string, data: CharacterData): Promise<void> {
    await this.client.set(makeId(userId, data.id), data);
  }

  async get(userId: string, charId: string): Promise<CharacterData | null> {
    return await this.client.get(makeId(userId, charId));
  }

  async list(userId: string): Promise<CharacterData[]> {
    const keys = await this.client.keys(`character:${userId}:*`);

    if (!keys.length) return [];

    const charsResp = await this.client.mget(keys);

    const chars: CharacterData[] = charsResp
      .filter((char): char is CharacterData => char !== null)
      .map((char) => char as CharacterData);

    return chars;
  }

}

export const characterStore = new CharacterStore();

