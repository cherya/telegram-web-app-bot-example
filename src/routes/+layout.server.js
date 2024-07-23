export const load = ({ locals }) => {
	const { session } = locals // locals.session set by hooks.server.ts/handle(), undefined if not logged in

  if (!session) {
    return { user :{}, valid: null}
  }

	return session
}