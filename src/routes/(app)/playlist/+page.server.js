import { writeFile } from 'fs/promises';
import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/database';

export const actions = {
  create: async ({ request, locals }) => {
    const data = await request.formData();
    const name = data.get('name');
    const image = data.get('image');
    const song = parseInt(data.get('song'));

    await writeFile(`static/${locals.user.id}/${image.name}`, image.stream())
      .catch((err) => {
        console.log(err);
        return fail(500, {
          success: false,
          message: 'Couldn\'t upload playlist image',
        });
      });

    const playlist = await db.playlist.create({
      data: {
        name: name,
        picture_url: `/${locals.user.id}/${image.name}`,
        is_private: false,
        creator_id: locals.user.id,
        songs: {
          connect: { id: song },
        },
      },
    });

    throw redirect(303, `/playlist/${playlist.id}`);
  },
  addSong: async ({ request }) => {
    const data = await request.formData();
    const playlist = parseInt(data.get('playlist'));
    const song = parseInt(data.get('song'));

    await db.playlist.update({
      where: { id: playlist },
      data: {
        songs: {
          connect: { id: song },
        },
      },
    });

    return {
      success: true,
      added: playlist,
    };
  },
}