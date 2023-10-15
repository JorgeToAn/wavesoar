<script>
    import InputText from '$lib/components/inputs/InputText.svelte';
    import InputImage from '$lib/components/inputs/InputImage.svelte';
    import SongUpload from '$lib/components/inputs/SongUpload.svelte';

    let songAmount = 1;
</script>

<h1 class="mx-4 mb-4 font-title text-6xl font-bold">Upload Album</h1>
<form method="POST" class="mx-20">
    <div class="my-10">
        <InputText css="w-full" label="Name" name="name" placeholder="Enter the name of your album" required/>
    </div>
    <div class="my-10">
        <InputImage label="Album Cover" name="cover" id="cover-upload"/>
    </div>
    <div class="my-10">
        <label for="song-amount">How many songs are in the album?</label>
        <input id="song-amount" class="bg-transparent border-2 rounded px-2 py-1" type="number" min="1" bind:value={songAmount}>
    </div>
    {#each {length: songAmount} as _, i}
        <div class="my-10">
            <SongUpload number={i+1} />
        </div>
    {/each}
    <button class="transition ease-in-out duration-500 bg-primary-500 hover:bg-primary-700 w-full py-2 rounded-lg font-bold" type="submit">Create</button>
</form>