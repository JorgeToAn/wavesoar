import { db } from '$lib/database';

export async function load({ locals }) {
  const albums = await db.album.findMany({
    where: {
      artist_id: locals.user.id,
    },
    include: {
      artist: {
        select: { username: true },
      },
    },
  });

  const playlists = await db.playlist.findMany({
    where: {
      creator_id: locals.user.id,
      name: { not: 'Liked' },
    },
    include: {
      creator: {
        select: { username: true },
      },
    },
  });

  return {
    albums,
    playlists,
  };
}