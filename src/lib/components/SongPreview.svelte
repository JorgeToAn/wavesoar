<script>
    import { queue, queueIndex } from '$lib/stores.js';
</script>

<div class="fixed left-4 bottom-10 px-2 flex justify-start items-center w-60 bg-[#222222] rounded">
    <img alt="Album Cover" class="w-16 h-16 rounded" src={$queue[$queueIndex]?.picture_path}>
    <div class="w-full overflow-hidden">
        <p id="scroll-text" class="title p-2 whitespace-nowrap text-clip">{$queue[$queueIndex]?.name}</p>
        <p class="author p-2 pt-0 whitespace-nowrap text-ellipsis text-primary-100">{$queue[$queueIndex]?.artist}</p>
    </div>
</div>

<style>
#scroll-text {
    /* animation properties */
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);

    -moz-animation: my-animation 10s linear infinite;
    -webkit-animation: my-animation 10s linear infinite;
    animation: my-animation 10s linear infinite;
}

/* for Firefox */
@-moz-keyframes my-animation {
    from { -moz-transform: translateX(100%); }
    to { -moz-transform: translateX(-100%); }
}

/* for Chrome */
@-webkit-keyframes my-animation {
    from { -webkit-transform: translateX(100%); }
    to { -webkit-transform: translateX(-100%); }
}

@keyframes my-animation {
    from {
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }
    to {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
}
</style>