import { db } from '$lib/database';

export async function POST({ request, locals }) {
  const data = await request.formData();
  const songId = parseInt(data.get('song-id'));

  const likedPlaylist = await db.playlist.findFirst({
    where: {
      name: 'Liked',
      creator_id: locals.user.id,
    },
  });

  const liked = await db.playlist.update({
    where: {
      id: likedPlaylist.id,
    },
    data: {
      songs: {
        connect: { id: songId },
      },
    },
  });

  if (liked) {
    return new Response(null, { status: 201, statusText: 'Liked' });
  } else {
    return new Response(null, { status: 400 });
  }
}