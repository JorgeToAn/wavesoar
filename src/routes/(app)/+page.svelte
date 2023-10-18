<script>
    import AlbumCard from '$lib/components/AlbumCard.svelte';
    import PlaylistCard from '$lib/components/PlaylistCard.svelte';

    export let data;
</script>

<h1 class="mx-4 mb-4 font-name text-6xl font-bold">Explore</h1>
<div id="new-albums">
    <h2 class="mx-4 font-title text-xl font-bold">New Albums</h2>
    <div class="flex flex-wrap">
        {#each data.albums as album}
            <AlbumCard {album}/>
        {/each}
    </div>
</div>
<div id="new-playlists">
    <h2 class="mx-4 font-title text-xl font-bold">New Playlists</h2>
    <div class="flex flex-wrap">
        {#each data.playlists as playlist}
            <PlaylistCard {playlist}/>
        {/each}
    </div>
</div>
