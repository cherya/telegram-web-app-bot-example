import type { Session } from '$lib/user/user';

declare global {
  namespace App {
    interface Locals {
      session?: Session;
    }

    interface Window {
      Telegram?: any
    }
  }
}
