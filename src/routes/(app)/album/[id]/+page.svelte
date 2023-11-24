<script>
    import SongCard from '$lib/components/SongCard.svelte';

    export let data;
</script>

<div id="album-info" class="flex justify-start items-center mx-12 my-4">
    <img src={data.album.picture_url} alt="Album Cover" class="w-40 h-40 rounded">
    <div id="album-text" class="mx-4">
        <h1 class="mb-6 font-title text-6xl font-bold">{data.album.name}</h1>
        <p class="hover:underline underline-offset-4"><a href="/user/{data.album.artist.id}">{data.album.artist.username}</a></p>
        <p>{data.album.genre.name}</p>
    </div>
</div>
<div id="songs">
    {#each data.songs as song}
        <SongCard song={song} artist={song.artist} album={song.album} showCover={false}/>
    {/each}
</div>