<script>
    import { queue } from '$lib/stores.js';

    export let song;
    export let artist;
    export let album;
    export let showCover = true;

    async function playNow() {
        $queue = [song];
        let player = document.getElementById('player');
        await player.load();
        player.play();
    }

    function addToQueue() {
        $queue = [...$queue, song];
    }
</script>

<div class="flex justify-items-start items-center transition ease-in bg-transparent hover:bg-primary-500 rounded my-2 p-2">
    <button on:click={playNow} class="w-16 h-16 relative group">
        {#if showCover}
            <img src={album.picture_url} alt="Album Cover" class="rounded group-hover:brightness-50">
            <i class="bi bi-play-fill invisible group-hover:visible absolute z-50 top-1/3 left-1/3 text-xl"></i>
        {:else}
            <i class="bi bi-play-fill group-hover:opacity-30 text-xl"></i>
        {/if}
    </button>
    <div class="px-4 w-5/12">
        <p class="font-title font-semibold text-2xl">{song.name}</p>
        <p>{artist.username}</p>
    </div>
    <div class="w-6/12">
        <p>{album.name}</p>
    </div>
    <button on:click={addToQueue} class="bg-transparent hover:bg-primary-700 p-4 rounded">
        <i class="bi bi-music-note-list"></i>
    </button>
</div>