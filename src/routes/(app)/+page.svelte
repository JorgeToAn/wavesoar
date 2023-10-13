<script>
    import CollectionCard from '$lib/components/CollectionCard.svelte';

    // MOCK DATA ONLY FOR TESTING
    let collection_items = [
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum really long long long long title', artist: 'the creator is god who may or may not be with us now'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', artist: 'the creator'},
    ]
</script>

<h1 class="mx-4 mb-4 font-title text-6xl font-bold">Explore</h1>
<div class="flex flex-wrap">
    {#each collection_items as { picture, href, title, artist }}
        <CollectionCard {picture} {href} {title} {artist} />
    {/each}
</div>