<script>
    import dayjs from 'dayjs';
    import AlbumCard from '$lib/components/AlbumCard.svelte';
    import PlaylistCard from '$lib/components/PlaylistCard.svelte';

    export let data;
</script>

<div id="profile-info" class="flex justify-start items-center mx-12 my-4">
    <img src={data.user.picture_url} alt="Profile" class="w-40 h-40 rounded-full">
    <div id="profile-text" class="mx-4">
        <h1 class="mb-6 font-title text-6xl font-bold">{data.user.username}</h1>
        <p>{data.user.first_name} {data.user.last_name || ''}</p>
        <p>Member since {dayjs(data.user.created_at).format('MMMM D, YYYY')}</p>
    </div>
</div>
<div class="albums">
    <h2 class="mx-4 mb-4 font-title text-xl font-bold">My Albums</h2>
    <div class="flex flex-nowrap overflow-x-auto">
        {#each data.albums as album}
            <AlbumCard {album}/>
        {:else}
            <div class="h-32 text-center mx-auto">
                <p class="text-xl m-2">You can upload an album here</p>
                <a href="/upload" class="m-2 ransition ease-in-out duration-500 bg-primary-500 hover:bg-primary-700 w-full py-2 px-4 rounded-lg font-bold" type="submit">Upload</a>
            </div>
        {/each}
    </div>
</div>
<div class="playlists">
    <h2 class="mx-4 mb-4 font-title text-xl font-bold">My Playlists</h2>
    <div class="flex flex-nowrap overflow-x-auto">
        {#each data.playlists as playlist}
            <PlaylistCard {playlist}/>
        {:else}
            <div class="h-32 text-center mx-auto">
                <p class="text-xl m-2">You haven't created a playlist yet</p>
            </div>
        {/each}
    </div>
</div>