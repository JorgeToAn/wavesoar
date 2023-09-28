<script>
    import dayjs from 'dayjs';

    export let css = '';
    export let label;
    export let name;
    export let value = dayjs().format('YYYY-MM-DD');
    export let required = false;
    export let instructions = 'This field is required';
    export let max;
    export let min;
</script>

<div>
    {#if label}
        {#if required}
            <label class="px-2 select-none cursor-text after:content-['_*'] after:text-red-500" for={name}>{label}</label>
        {:else}
            <label class="px-2 select-none cursor-text" for={name}>{label}</label>
        {/if}
    {/if}
    <input class="peer bg-transparent border-2 rounded px-2 py-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 {css}" type="date" id={name} {name} {max} {min} required={required} bind:value>
    {#if instructions}
        <span class="hidden px-2 text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">{instructions}</span>
    {/if}
</div>