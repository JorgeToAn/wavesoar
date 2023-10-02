<script>
    import { page } from '$app/stores';

    let visible = false;

    function toggle() {
        visible = !visible;
    }
</script>

<div class="profile-menu w-full flex items-center">
    <img src={$page.data.user.picture_path} alt="Profile" class="rounded-full w-10 h-10">
    <div>
        <button class="px-2 font-bold" on:click={toggle}>{$page.data.user.username}<i class="pl-2 bi bi-caret-down-fill"></i></button>
    </div>
    {#if visible}
        <div class="dropdown absolute top-14 w-40 shadow-lg bg-slate-800 rounded">
            <form action="/logout" method="POST">
                <button class="w-full px-4 py-1 rounded transition ease-in text-left hover:bg-slate-300 hover:text-black" type="submit"><i class="bi bi-box-arrow-right"></i> Log out</button>
            </form>
        </div>
    {/if}
</div>