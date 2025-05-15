import { useWritable } from "./use-shared-store";

export const CharStore = () => useWritable('character', {
  character: {},
  ready: false,
});
