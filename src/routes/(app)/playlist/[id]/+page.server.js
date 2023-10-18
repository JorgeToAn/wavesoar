import { db } from '$lib/database';

export async function load({ params }) {
  const playlistId = parseInt(params.id);

  const playlist = await db.playlist.findUnique({
    where: {
      id: playlistId,
    },
    include: {
      creator: {
        select: { username: true },
      },
      songs: {
        include: {
          album: true,
          artist: {
            select: { username: true },
          },
        },
      },
    },
  });

  return {
    playlist,
  }
}