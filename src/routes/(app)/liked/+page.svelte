<script>
    import SongCard from '$lib/components/SongCard.svelte';

    // MOCK DATA ONLY FOR TESTING
    let songs = [
        {
            name: 'Blitz It!',
            artist: 'Chirpy Chips',
            albumName: 'Splatoon 3 OST',
            img: '/images/default_collection.jpg',
            url: '/songs/Blitz It!.mp3',
        },
        {
            name: 'Specialist',
            artist: 'Shoji Meguro',
            albumName: 'Persona 4 OST',
            img: '/images/default_collection.jpg',
            url: '/songs/Specialist.mp3',
        }
    ];
</script>

<h1 class="mx-4 mb-4 font-title text-6xl font-bold">My Liked Songs</h1>
{#each songs as { name, artist, albumName, img, url }}
    <SongCard {name} {artist} {albumName} {img} {url} />
{/each}
