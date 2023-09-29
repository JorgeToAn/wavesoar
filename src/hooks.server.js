import { db } from '$lib/database';

export async function handle({ event, resolve }) {
  const session = event.cookies.get('session');

  if (!session) {
    event.locals.user = null;
    return await resolve(event);
  }

  const user = await db.user.findUnique({
    where: { auth_token: session },
    select: {
      username: true,
      picture_path: true,
      role: true,
    }
  });

  if (user) {
    event.locals.user = {
      username: user.username,
      picture_path: user.picture_path,
      role: user.role,
    };
  }

  const response = await resolve(event);
  return response;
}