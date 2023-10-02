<script>
    import CollectionCard from '$lib/components/CollectionCard.svelte';

    // MOCK DATA ONLY FOR TESTING
    let collection_items = [
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
        { picture: '/images/default_collection.jpg', href: '/', title: 'Lorem Ipsum', author: 'the creator'},
    ]
</script>

<h1 class="mx-4 mb-4 font-title text-6xl font-bold">Explore</h1>
<div class="flex flex-wrap">
    {#each collection_items as { picture, href, title, author }}
        <CollectionCard {picture} {href} {title} {author} />
    {/each}
</div>