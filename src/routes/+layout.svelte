<script>
    import '../app.css';
</script>

<svelte:head>
    <title>wavesoar</title>
</svelte:head>

<slot />
<footer class="fixed bottom-0 w-full z-40">
    <svg class="waves w-full -mb-4 md:h-52" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="#92b4f4" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="#4472ca" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="#5e7ce2" />
        </g>
    </svg>
</footer>

<style lang="postcss">
    .parallax > use {
        animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
    }
    .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
    }
    .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
    }
    @keyframes move-forever {
        0% {
            transform: translate3d(-90px,0,0);
        }
        100% {
            transform: translate3d(85px,0,0);
        }
    }
    /*Shrinking for mobile*/
    @media (max-width: 768px) {
        .waves {
            height:80px;
            min-height:80px;
        }
    }

</style>