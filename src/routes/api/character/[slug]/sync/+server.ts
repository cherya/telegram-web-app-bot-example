import { json, error } from '@sveltejs/kit';
import { characterStore } from '$lib/server/character-store';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { runServerSimulation } from '$lib/server/activities/simulation';
import { Character } from '$lib/character/character';

export async function POST({ locals, params, request }: ServerLoadEvent) {
  if (!locals.session) {
    return error(401, 'Unauthorized');
  }

  const data = await characterStore.get(String(locals.session.user.id), params.slug);

  const char = new Character(data);
  let simulated = char;

  const activityTimeline = await request.json();

  if (data && !data.lastSyncAt) {
    data.lastSyncAt = Date.now();
  }

  if (data && data.currentActivity) {
    simulated = runServerSimulation(char, activityTimeline, Date.now());
  }

  await characterStore.set(String(locals.session.user.id), { ...simulated });

  return json(simulated);
};
