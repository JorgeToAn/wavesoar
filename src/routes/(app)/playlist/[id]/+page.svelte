<script>
    import SongCard from '$lib/components/SongCard.svelte';

    export let data;
</script>

<div id="playlist-info" class="flex justify-start items-center mx-12 my-4">
    <img src={data.playlist.picture_url} alt="Playlist Cover" class="w-40 h-40 rounded">
    <div id="playlist-text" class="mx-4">
        <h1 class="mb-6 font-title text-6xl font-bold">{data.playlist.name}</h1>
        <p class="hover:underline underline-offset-4"><a href="/user/{data.playlist.creator.id}">{data.playlist.creator.username}</a></p>
    </div>
</div>
<div id="songs">
    {#each data.playlist.songs as song}
        <SongCard song={song} artist={song.artist} album={song.album}/>
    {/each}
</div>
