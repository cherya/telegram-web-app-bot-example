import { KV_REST_API_URL, KV_REST_API_TOKEN } from "$env/static/private";
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: KV_REST_API_URL || "",
  token: KV_REST_API_TOKEN || ""
});


// Initialize Redis
class SessionStore {
  constructor() {
    this.client = redis
  }

  async set(sessionId, data) {
    await this.client.set(sessionId, JSON.stringify(data), { ex: 60 * 5 });
  }

  async get(sessionId) {
    const data = await this.client.get(sessionId);
    return data;
  }
}

export const sessionStore = new SessionStore();
