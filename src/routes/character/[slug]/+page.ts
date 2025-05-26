import type { LoadEvent } from "@sveltejs/kit";
import { GetCharacterById } from "$lib/character/api";

export const load = async ({ data, params }: LoadEvent) => {
  if (!data.character) {
    console.log("No character data found, refetching it");
  }

  return {
    character: data.character || (await GetCharacterById(params.slug)),
  };
};
