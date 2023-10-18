import { db } from '$lib/database';

export async function load({ locals }) {
  const user = await db.user.findUnique({
    where: { id: locals.user.id },
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
    where: { artist_id: locals.user.id },
    select: {
      id: true,
      name: true,
      picture_url: true,
      artist: {
        select: {
          id: true,
          username: true
        },
      },
    },
  });

  const playlists = await db.playlist.findMany({
    where: { creator_id: locals.user.id },
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
    user,
    albums,
    playlists,
  };
}