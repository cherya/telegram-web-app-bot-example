import "../app.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

export const prerender = true;
export const ssr = false;

export const trailingSlash = "always";

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'nodejs20.x'
};