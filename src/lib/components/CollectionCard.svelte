<script>
    export let picture;
    export let title;
    export let href;
    export let author;
</script>

<div class="collection-card transition ease-in rounded m-4 w-44 max-w-lg bg-primary-500 hover:bg-primary-800 hover:scale-110">
    <a {href}>
        <img src={picture} alt="Cover" class="rounded-t w-44 h-44 mx-auto">
        <p class="title p-2">{title}</p>
        <p class="author p-2 pt-0 text-primary-100">{author}</p>
    </a>
</div>