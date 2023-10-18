<script>
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import InputText from '$lib/components/inputs/InputText.svelte';

    export let number = 0;
    let input;
    let file;

    function clear() {
        input.value = '';
        file = null;
    }
</script>

<div class="flex-1 flex justify-between" transition:fly={{ duration: 150, y: 100, opacity: 0.5, easing: quintOut }}>
    <InputText label="Song Name" name="songname-{number}" placeholder="Name of the song" required />
    <label class="transition ease-in-out duration-500 bg-primary-500 hover:bg-primary-700 px-6 py-2 rounded-lg font-bold text-center" for="songfile-{number}">
        {#if file}
            {file.name}
            <button class="hover:text-red-500 pl-2" on:click={clear}><i class="bi bi-trash3-fill"></i></button>
        {:else}
            <i class="bi bi-file-earmark-music"></i> File
        {/if}
    </label>
    <input bind:this={input} on:change={() => file = input.files[0]} id="songfile-{number}" name="songfile-{number}" class="hidden" type="file" accept=".mp3, .wav, .aac, .oga" required>
</div>