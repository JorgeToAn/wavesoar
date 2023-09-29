import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import dayjs from 'dayjs';
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
    const username = data.get('username');
    const password = data.get('password');
    const password2 = data.get('confirm-password');
    const first_name = data.get('first-name');
    const last_name = data.get('last-name');
    const birthdate = dayjs(data.get('birthdate'));

    const user = await db.user.findUnique({
      where: { username },
    });

    // username is taken
    if (user) {
      return fail(400, { user: true });
    }

    if (password !== password2) {
      return fail(400, { password: true });
    }

    const authenticatedUser = await db.user.create({
      data: {
        email,
        username,
        password: await bcrypt.hash(password, 10),
        auth_token: crypto.randomUUID(),
        first_name,
        last_name,
        birthdate,
      }
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