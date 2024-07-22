import { json, error } from '@sveltejs/kit';
import { Validator } from '$lib/server/telegram';

export const GET = ({ url }) => {
	
  let data = Validator.validateData(url.searchParams.toString(), 60*60*24*30);

	return json(data);
};