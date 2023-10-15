import { db } from '$lib/database';

export async function load() {
  const genres = await db.genre.findMany();

  return {
    genres
  };
}