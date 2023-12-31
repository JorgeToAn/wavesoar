import { db } from '$lib/database';

export async function load() {
  const albums = await db.album.findMany({
    include: {
      artist: {
        select: {
          id: true,
          username: true,
        },
      },
    },
    orderBy: {
      id: 'desc',
    },
    take: 10,
  });

  const playlists = await db.playlist.findMany({
    where: {
      name: { not: 'Liked' },
    },
    include: {
      creator: {
        select: {
          id: true,
          username: true,
        },
      },
    },
    orderBy: {
      id: 'desc',
    },
    take: 10,
  })

  return {
    albums,
    playlists,
  }
}