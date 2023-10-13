<script>
    import SongCard from '$lib/components/SongCard.svelte';

    // MOCK DATA ONLY FOR TESTING
    let songs = [
        {
            name: 'Blitz It!',
            artist: 'Chirpy Chips',
            album: 'Splatoon 3 OST',
            picture_path: '/images/default_collection.jpg',
            file_url: '/songs/Blitz It!.mp3',
        },
        {
            name: 'Specialist',
            artist: 'Shoji Meguro',
            album: 'Persona 4 OST',
            picture_path: '/images/default_collection.jpg',
            file_url: '/songs/Specialist.mp3',
        }
    ];
</script>

<h1 class="mx-4 mb-4 font-title text-6xl font-bold">My Liked Songs</h1>
{#each songs as { name, artist, album, picture_path, file_url }}
    <SongCard {name} {artist} {album} {picture_path} {file_url} />
{/each}
