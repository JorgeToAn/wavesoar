<script>
    import SongCard from '$lib/components/SongCard.svelte';

    export let data;
</script>

<h1 class="mx-4 mb-4 font-title text-6xl font-bold">My Liked Songs</h1>
{#each data.liked.songs as song}
    <SongCard song={song} artist={song.artist} album={song.album} />
{/each}
