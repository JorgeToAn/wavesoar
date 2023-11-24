import { existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import { getAudioDurationInSeconds } from 'get-audio-duration';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/database';

export async function load() {
  const genres = await db.genre.findMany();

  return {
    genres
  };
}

export const actions = {
  default: async ({ request, locals }) => {
    const user = locals.user;
    const data = await request.formData();
    const albumName = data.get('name');
    const albumCover = data.get('cover');
    const songAmount = data.get('song-amount');
    const genreId = parseInt(data.get('genre'));

    const albumdir = `/${user.id}/${albumName}/`;
    const songdir = albumdir + 'songs/';
    if (!existsSync('static' + songdir)) {
      mkdirSync('static' + songdir, { recursive: true });
    }

    const songs = [];
    for (let i = 1; i <= songAmount; i++) {
      const songName = data.get(`songname-${i}`);
      const songFile = data.get(`songfile-${i}`);

      if (!songName || !songFile) {
        return fail(400, {
          song: true,
          message: 'You must provide a name and file for each song',
        });
      }

      const fileURL = songdir + songFile.name;
      await writeFile('static' + fileURL, songFile.stream())
        .catch((err) => {
          console.log(err);
          return fail(500, {
            song: true,
            message: 'Couldn\'t upload song files',
          });
        });

      const duration = await getAudioDurationInSeconds('static' + fileURL);

      const song = {
        name: songName,
        duration,
        file_url: fileURL,
        number: i,
        artist_id: user.id,
      }

      songs.push(song);
    }

    let pictureURL = undefined;
    if (albumCover) {
      pictureURL = albumdir + albumCover.name;
      await writeFile('static' + pictureURL, albumCover.stream())
        .catch((err) => {
          console.log(err);
          return fail(500, {
            cover: true,
            message: 'Couldn\'t upload album cover',
          });
        });
    }

    const album = await db.album.create({
      data: {
        name: albumName,
        picture_url: pictureURL,
        artist_id: user.id,
        genre_id: genreId,
        songs: {
          createMany: {
            data: songs,
          },
        },
      },
    }).catch((err) => {
      console.log(err);
      return fail(500, {
        db: true,
        message: 'Couldn\'t create album',
      })
    });

    throw redirect(303, `/album/${album.id}`);
  }
}