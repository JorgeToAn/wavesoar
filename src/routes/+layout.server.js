export async function load({ locals, url }) {
  return {
    user: locals.user,
    url: url.pathname,
  };
}