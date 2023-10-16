import { db } from '$lib/database';

export async function load({ locals }) {
  const liked = await db.playlist.findFirst({
    where: {
      name: 'LIKED',
      creator_id: locals.user.id,
    },
    include: {
      songs: {
        include: {
          artist: true,
          album: true,
        },
      },
    },
  });

  return {
    liked
  };
}