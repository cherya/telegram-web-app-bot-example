import { SESSION_TTL_SECONDS } from '$env/static/private';

export const sessionTTL = parseInt(SESSION_TTL_SECONDS) * 1000;
