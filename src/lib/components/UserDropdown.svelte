<script>
    import { page } from '$app/stores';
    let visible = false;

    function toggle() {
        visible = !visible;
    }
</script>

<div class="profile-menu w-96 m-2 flex items-center">
    <img src={$page.data.user.picture_path} alt="Profile" class="rounded-full w-10 h-10">
    <div>
        <button class="px-2 font-bold" on:click={toggle}>{$page.data.user.username}<i class="pl-2 bi bi-caret-down-fill"></i></button>
    </div>
    {#if visible}
        <div class="dropdown absolute top-14 w-32 border-2 border-light rounded-md">
            <form action="/logout" method="POST">
                <button class="w-full p-1 bg-transparent hover:bg-slate-300" type="submit">Log out</button>
            </form>
        </div>
    {/if}
</div>