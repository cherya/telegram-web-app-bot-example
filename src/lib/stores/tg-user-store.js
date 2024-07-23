import { useWritable } from "./use-shared-store";
import { writable } from "svelte/store";

export const TgUserStore = () => useWritable('tg_user', {
  isValidTgUser: null,
  user: {},
});
