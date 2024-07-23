import { json, error } from '@sveltejs/kit';
import { Validator } from '$lib/server/telegram';

export async function GET({ url }) {
  await new Promise(r => setTimeout(r, 1000));

  let data = Validator.validateData(url.searchParams.toString(), 60*60*24*30);

	return json(data);
};  