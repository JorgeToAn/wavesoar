<script>
    import CollectionCard from '$lib/components/CollectionCard.svelte';

    // MOCK DATA ONLY FOR TESTING
    let collection_items = [
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum really long long long long name', artist: 'the creator is god who may or may not be with us now'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
        { picture_path: '/images/default_collection.jpg', href: '/', name: 'Lorem Ipsum', artist: 'the creator'},
    ]
</script>

<h1 class="mx-4 mb-4 font-name text-6xl font-bold">Explore</h1>
<div class="flex flex-wrap">
    {#each collection_items as { picture_path, href, name, artist }}
        <CollectionCard {picture_path} {href} {name} {artist} />
    {/each}
</div>