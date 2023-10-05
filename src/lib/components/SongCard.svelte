<script>
    import { queue } from '$lib/stores.js';

    export let name;
    export let artist;
    export let img;
    export let albumName;
    export let url;

    function playNow() {
        let song = {
            name,
            artist,
            img,
            albumName,
            url,
        };
        $queue = [song];
    }

    function addToQueue() {
        let song = {
            name,
            artist,
            img,
            albumName,
            url,
        };
        $queue = [...$queue, song];
    }
</script>

<div class="flex justify-items-start items-center transition ease-in bg-transparent hover:bg-primary-500 rounded my-2 p-2">
    <button on:click={playNow} class="relative group">
        <img src={img} alt="Album Cover" class="w-16 h-16 rounded group-hover:brightness-50">
        <i class="bi bi-play-fill invisible group-hover:visible absolute z-50 top-1/3 left-1/3 text-xl"></i>
    </button>
    <div class="px-4 w-5/12">
        <p class="font-title font-semibold text-2xl">{name}</p>
        <p>{artist}</p>
    </div>
    <div class="w-6/12">
        <p>{albumName}</p>
    </div>
    <button on:click={addToQueue} class="bg-transparent hover:bg-primary-700 p-4 rounded">
        <i class="bi bi-music-note-list"></i>
    </button>
</div>