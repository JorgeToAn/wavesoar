<script>
    export let label;
    export let name;
    export let id = 'image-upload';
    export let required = false;
    export let instructions = 'Accepted formats are JPG, JPEG and PNG';

    let input;
    let image;
    let showImage = false;

    function onChange() {
        const file = input.files[0];

        if (file) {
            showImage = true;

            const reader = new FileReader();
            reader.addEventListener("load", function () {
                image.setAttribute("src", reader.result);
            });
            reader.readAsDataURL(file);
            return;
        }
            showImage = false;
    }

    function clear() {
        input.value = '';
        showImage = false;
    }
</script>

{#if label}
    {#if required}
    <p class="px-2 select-none cursor-text after:content-['_*'] after:text-red-500">{label}</p>
    {:else}
    <p class="px-2 select-none cursor-text">{label}</p>
    {/if}
{/if}
<label for={id} class="w-full block transition ease-in-out duration-500 bg-primary-500 hover:bg-primary-700 px-6 py-2 rounded-lg font-bold text-center">
    {#if showImage}
        <div class="flex justify-between items-center">
            <img bind:this={image} src="" alt="Preview" class="h-20" />
            <button on:click={clear} class="hover:text-red-500"><i class="bi bi-trash3-fill"></i></button>
        </div>
    {:else}
        <i class="bi bi-image"></i> Upload Image
    {/if}
</label>
<p class="px-2">{instructions}</p>
<input
    bind:this={input}
    on:change={onChange}
    class="hidden"
    type="file"
    accept=".jpg, .jpeg, .png"
    {id} {name} {required}
/>