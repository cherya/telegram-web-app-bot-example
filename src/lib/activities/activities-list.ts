import { Mining } from "./mining";
import { Woodcutting } from "./woodcutting";
import { Fishing } from "./fishing";
import { Smithing } from "./smithing";
import { Herbalism } from "./herbalism";

import type { Activity } from "./types";

export const Activities: Record<string, Activity> = {
  [Mining.name]: Mining,
  [Woodcutting.name]: Woodcutting,
  [Fishing.name]: Fishing,
  [Smithing.name]: Smithing,
  [Herbalism.name]: Herbalism,
}
