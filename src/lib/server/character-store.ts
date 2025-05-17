import { KV_REST_API_URL, KV_REST_API_TOKEN } from "$env/static/private";
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: KV_REST_API_URL || "",
  token: KV_REST_API_TOKEN || ""
});

function makeId(userId: string): string {
  return `character:${userId}`;
}

export interface CharacterData {
  // Define the shape of your character data here
  [key: string]: any;
}

class CharacterStore {
  private client: Redis;

  constructor() {
    this.client = redis;
  }

  async set(userId: string, data: CharacterData): Promise<void> {
    await this.client.set(makeId(userId), data);
  }

  async get(userId: string): Promise<CharacterData | null> {
    return await this.client.get(makeId(userId));
  }
}

export const characterStore = new CharacterStore();

