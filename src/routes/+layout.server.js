export const load = ({ locals }) => {
  const { session } = locals // locals.session set by hooks.server.ts/handle(), undefined if not logged in

  if (!session) {
    return { data: { user: {}, valid: null }, loading: true }
  }

  return { data: { user: session.user, valid: session.valid }, loading: false }
}
