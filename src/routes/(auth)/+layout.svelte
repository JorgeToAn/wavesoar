<script>
    import { fly } from 'svelte/transition';

    export let data;
</script>

<nav>
    <a href="/login" class="font-title md:text-8xl text-4xl tracking-tight px-8 py-4">wavesoar</a>
</nav>
{#key data.url}
    <main
        class="pb-48"
        in:fly={{ x: -200, duration: 300, delay: 300 }}
        out:fly={{ x: 200, duration: 300 }}
    >
        <slot />
    </main>
{/key}