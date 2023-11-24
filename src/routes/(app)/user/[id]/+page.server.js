import { redirect } from '@sveltejs/kit';
import { db } from '$lib/database';

export async function load({ params, locals }) {
  const id = params.id;

  // redirect to profile
  if (id === locals.user.id) {
    throw redirect(300, '/user');
  }

  const profile = await db.user.findUnique({
    where: { id: id },
    select: {
      username: true,
      first_name: true,
      last_name: true,
      bio: true,
      created_at: true,
      picture_url: true,
    },
  });

  const albums = await db.album.findMany({
    where: { artist_id: id },
    select: {
      id: true,
      name: true,
      picture_url: true,
      artist: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  const playlists = await db.playlist.findMany({
    where: { creator_id: id },
    select: {
      id: true,
      name: true,
      picture_url: true,
      creator: {
        select: {
          id: true,
          username: true
        },
      },
    },
  });

  return {
    profile,
    albums,
    playlists,
  }
}