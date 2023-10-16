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
      id: true,
      email: true,
      username: true,
      first_name: true,
      last_name: true,
      bio: true,
      birthdate: true,
      picture_url: true,
      created_at: true,
      role: true,
    }
  });

  if (user) {
    event.locals.user = user
  }

  const response = await resolve(event);
  return response;
}