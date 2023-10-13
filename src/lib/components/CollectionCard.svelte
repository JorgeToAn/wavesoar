<script>
    export let picture_path;
    export let name;
    export let href;
    export let artist;
</script>

<div class="collection-card transition ease-in rounded m-4 w-44 max-w-lg bg-primary-500 hover:bg-primary-800 hover:scale-110">
    <a {href}>
        <img src={picture_path} alt="Cover" class="rounded-t w-44 h-44 mx-auto">
        <p class="title p-2 whitespace-nowrap text-ellipsis overflow-hidden">{name}</p>
        <p class="artist p-2 pt-0 whitespace-nowrap text-ellipsis overflow-hidden text-primary-100">{artist}</p>
    </a>
</div>