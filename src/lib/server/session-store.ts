import { KV_REST_API_URL, KV_REST_API_TOKEN, SESSION_TTL_SECONDS } from "$env/static/private";
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: KV_REST_API_URL || "",
  token: KV_REST_API_TOKEN || ""
});

const ttl = parseInt(SESSION_TTL_SECONDS) || 60 * 5; // Default to 5 minutes if not set

// Initialize Redis
class SessionStore {
  client: Redis;

  constructor() {
    this.client = redis;
  }

  async set(sessionId: string, data: unknown): Promise<void> {
    await this.client.set(sessionId, data, { ex: ttl });
  }

  async get<T = unknown>(sessionId: string): Promise<T | null> {
    return await this.client.get(sessionId);
  }
}

export const sessionStore = new SessionStore();

