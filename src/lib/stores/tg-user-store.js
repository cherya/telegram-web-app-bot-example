import { useWritable } from "./use-shared-store";

export const TgUserStore = () => useWritable('tg_user', {
  valid: null,
  user: {},
});
