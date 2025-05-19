import type { Session } from '$types/user';

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
