<script>
    export let icon;
    export let text;
    export let href;
</script>

<a {href} class="flex px-2 py-4 rounded transition ease-in hover:bg-light hover:text-cyan-950 text-2xl font-title font-semibold">
    <i class="mr-2 {icon}"></i>{text}
</a>