import { KV_REST_API_URL, KV_REST_API_TOKEN } from "$env/static/private";
import { Redis } from '@upstash/redis';
import { sessionTTL } from "$constants";

const redis = new Redis({
  url: KV_REST_API_URL || "",
  token: KV_REST_API_TOKEN || ""
});

// Initialize Redis
class SessionStore {
  private client: Redis;

  constructor() {
    this.client = redis;
  }

  async set(sessionId: string, data: unknown): Promise<void> {
    await this.client.set(sessionId, data, { ex: sessionTTL / 1000 });
  }

  async get<T = unknown>(sessionId: string): Promise<T | null> {
    return await this.client.get(sessionId);
  }
}

export const sessionStore = new SessionStore();

