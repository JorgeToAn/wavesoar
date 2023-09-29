import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { db } from '$lib/database';

export async function load({ locals }) {
  if (locals.user) {
    throw redirect(302, '/');
  }
}

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    if (!email || !password) {
      return fail(400, { invalid: true });
    }

    const user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      return fail(400, { credentials: true });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return fail(400, { credentials: true });
    }

    const authenticatedUser = await db.user.update({
      where: { id: user.id },
      data: { auth_token: crypto.randomUUID() },
    });

    cookies.set('session', authenticatedUser.auth_token, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      // expire after a month
      maxAge: 60 * 60 * 24 * 30,
    });

    throw redirect(302, '/');
  }
}