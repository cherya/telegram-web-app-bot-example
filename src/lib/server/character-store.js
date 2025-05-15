import { KV_REST_API_URL, KV_REST_API_TOKEN } from "$env/static/private";
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: KV_REST_API_URL || "",
  token: KV_REST_API_TOKEN || ""
});

function makeId(userId) {
  return `character:${userId}`;
}

class CharacterStore {
  constructor() {
    this.client = redis
  }

  async set(userId, data) {
    await this.client.set(makeId(userId), data);
  }

  async get(userId) {
    return await this.client.get(makeId(userId));
  }
}

export const characterStore = new CharacterStore();
