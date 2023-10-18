import { json } from '@sveltejs/kit';
import { db } from '$lib/database';

export async function GET({ url }) {
  const creator = url.searchParams.get('creator') ?? '';
  const song = parseInt(url.searchParams.get('song')) ?? undefined;

  const playlists = await db.playlist.findMany({
    where: {
      creator_id: creator,
      songs: {
        none: {
          id: song,
        },
      },
    },
  });

  return json(playlists);
}