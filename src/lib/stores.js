import { writable } from 'svelte/store';

export const queue = writable([]);
export const queueIndex = writable(0);

export const addSongId = writable(0);