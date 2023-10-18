<script>
    import { enhance } from '$app/forms'
    import { page } from '$app/stores';
    import { addSongId } from '$lib/stores';

    let modal;
    let reset;
    let playlists = [];
    let loading = false;

    // fetch available playlists each time we click 'add to playlist'
    $: if($addSongId > 0) fetchPlaylists();

    async function fetchPlaylists() {
        const url = `/api/playlist?creator=${$page.data.user.id}&song=${$addSongId}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });

        playlists = await response.json();
    }

    function hide() {
        modal.classList.add('hidden');
        reset.click();
        $addSongId = 0;
    }

    function addToPlaylist() {
        loading = true;

        return async ({ result }) => {
            loading = false;
            if(result.type === 'success') {
                alert(`added to ${result.data.added}`);
                playlists = playlists.filter((playlist) => playlist.id !== result.data.added);
                await applyAction(result);
            }
        }
    }
</script>

<div bind:this={modal} id="playlist-modal" class="hidden fixed left-0 top-0 w-full h-full z-50 bg-[rgb(0,0,0,0.4)]">
    <div class="bg-[#222222] w-1/2 my-8 mx-auto p-4 rounded-lg">
        <div class="flex justify-between items-center mx-4">
            <h1 class="text-xl font-semibold">Add To Playlist</h1>
            <button on:click={hide}><i class="bi bi-x-lg"></i></button>
        </div>
        <hr class="my-2">
        <div>
            <form use:enhance action="/playlist?/create" method="POST" enctype="multipart/form-data" class="flex justify-between items-center my-2 px-2 py-1">
                <label class="rounded w-10 h-10 hover:opacity-50 hover:bg-[rgb(255,255,255,0.5)] flex items-center justify-center" for="new-playlist-image"><i class="bi bi-image"></i></label>
                <input class="hidden" id="new-playlist-image" name="image" type="file" allow=".jpg, .jpeg, .png">
                <input class="hidden" name="song" type="number" value={$addSongId}>
                <input class="flex-1 mx-4 focus:mx-[14px] focus:border-2 rounded py-1 bg-transparent" name="name" type="text" placeholder="New Playlist Name" required>
                <button bind:this={reset} class="hidden" type="reset"></button>
                <button class="p-2 rounded hover:bg-primary-500" type="submit">Create</button>
            </form>
            {#each playlists as playlist (playlist.id)}
                <div class="flex justify-between items-center transition ease-in bg-transparent hover:bg-primary-500 rounded my-2 px-2 py-1">
                    <img src={playlist.picture_url} alt="Playlist" class="rounded w-10 h-10">
                    <div class="flex-1 mx-4">
                        <p>{playlist.name}</p>
                    </div>
                    <form action="/playlist?/addSong" method="POST" use:enhance={addToPlaylist}>
                        <input class="hidden" name="playlist" type="number" value={playlist.id}>
                        <input class="hidden" name="song" type="number" value={$addSongId}>
                        <button disabled={loading} class="group relative bg-transparent hover:bg-primary-700 p-4 rounded">
                            <span class="z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition ease-in duration-200 delay-1000 w-32 absolute right-full mr-2 text-center bg-[#222222] rounded">Add</span>
                        </button>
                    </form>
                </div>
            {/each}
        </div>
    </div>
</div>