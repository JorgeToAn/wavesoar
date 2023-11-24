import { db } from '$lib/database';

export async function load({ params }) {
  const albumId = parseInt(params.id);

  const album = await db.album.findUnique({
    where: { id: albumId },
    include: {
      artist: {
        select: {
          id: true,
          username: true,
        },
      },
      genre: {
        select: {
          name: true,
        },
      },
    },
  });

  const songs = await db.song.findMany({
    where: { album_id: album.id },
    include: {
      album: true,
      artist: {
        select: {
          id: true,
          username: true,
        },
      },
    },
    orderBy: {
      number: 'asc',
    },
  });

  return {
    album,
    songs,
  };
}