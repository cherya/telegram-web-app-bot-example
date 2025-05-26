import { Mining } from "./mining";
import type { Activity } from "./types";

export const Activities: Record<string, Activity> = {
  [Mining.name]: Mining,
}
