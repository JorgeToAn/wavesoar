import { redirect } from '@sveltejs/kit';

export async function load() {
  throw redirect(302, '/');
}

export const actions = {
  default({ cookies }) {
    cookies.delete('session', { path: '/' });
    throw redirect(302, '/login');
  }
}