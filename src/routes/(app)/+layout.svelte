<script>
    import { queue } from '$lib/stores.js';
    import { fly } from 'svelte/transition';
    import UserDropdown from '$lib/components/UserDropdown.svelte';
    import NavLink from '$lib/components/NavLink.svelte';
    import Player from '$lib/components/Player.svelte';
	import SongPreview from '$lib/components/SongPreview.svelte';
    import AddToPlayListModal from '$lib/components/AddToPlayListModal.svelte';

    export let data;
    let navlinks = [
        { icon: 'bi bi-grid', text: 'Explore', href: '/' },
        { icon: 'bi bi-heart', text: 'Liked', href: '/liked'},
        { icon: 'bi bi-disc', text: 'My Collection', href: '/collection'},
    ];
</script>

<nav class="fixed z-30 shadow-xl bg-cyan-950 w-64 h-screen p-2">
    <UserDropdown />
    <div class="navlinks py-4">
        {#each navlinks as { icon, text, href }}
            <NavLink {icon} {text} {href} />
        {/each}
    </div>
</nav>
{#key data.url}
<main
    class="ml-64 mb-52 p-2"
    in:fly={{ y: -200, duration: 300, delay: 300 }}
    out:fly={{ y: 200, duration: 300 }}
>
    <slot />
</main>
{/key}
<div class="z-50 fixed bottom-0 w-full">
    {#if $queue.length}
        <SongPreview/>
    {/if}
    <Player />
</div>
<AddToPlayListModal />