import { KV_REST_API_URL, KV_REST_API_TOKEN } from "$env/static/private";
import { Redis } from '@upstash/redis';

// Initialize Redis
class SessionStore {
  constructor() {
    this.client = new Redis({
      url: KV_REST_API_URL || "",
      token: KV_REST_API_TOKEN || ""
    });
  }

  async set(sessionId, data) {
    await this.client.set(sessionId, JSON.stringify(data), { ex: 60 * 5 });
  }

  async get(sessionId) {
    const data = await this.client.get(sessionId);
    return data ? JSON.parse(data) : null;
  }
}

export const sessionStore = new SessionStore();
