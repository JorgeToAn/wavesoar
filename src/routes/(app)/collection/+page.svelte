<script>
    import AlbumCard from '$lib/components/AlbumCard.svelte';
    import PlaylistCard from '$lib/components/PlaylistCard.svelte';

    export let data;
</script>

<h1 class="mx-4 mb-4 font-title text-6xl font-bold">My Collection</h1>
{#if data.albums.length}
    <div class="albums">
        <h2 class="mx-4 mb-4 font-title text-xl font-bold">My Albums</h2>
        <div class="flex flex-nowrap overflow-x-auto">
            {#each data.albums as album}
                <AlbumCard {album}/>
            {/each}
        </div>
    </div>
{/if}
{#if data.playlists.length}
    <div class="playlists">
        <h2 class="mx-4 mb-4 font-title text-xl font-bold">My Playlists</h2>
        <div class="flex flex-nowrap overflow-x-auto">
            {#each data.playlists as playlist}
                <PlaylistCard {playlist}/>
            {/each}
        </div>
    </div>
{/if}