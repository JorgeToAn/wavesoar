<script>
    import InputPassword from '$lib/components/inputs/InputPassword.svelte';
    import InputEmail from '$lib/components/inputs/InputEmail.svelte';

    export let form;
</script>

<a href="/login" class="font-title md:text-8xl text-4xl tracking-tight px-8 py-4">wavesoar</a>
<div class="md:w-1/2 md:mx-auto mx-8 mt-10 mb-2 border-2 rounded-lg">
    <div class="py-2 px-4">
        <h2 class="text-3xl py-2 px-2">Start Surfing</h2>
        <hr class="border">
    </div>
    <form class="my-10 px-20" method="POST">
        <div class="my-10">
            <InputEmail css="w-full" label="Email" name="email" required/>
        </div>
        <div class="my-10">
            <InputPassword css="w-full" label="Password" name="password" pattern=".+" required instructions="This field is required"/>
            <p class="px-2">Forgot your password? <a href="/reset-password" class="hover:underline text-primary-500 hover:text-primary-700">Go here</a></p>
        </div>
        {#if form?.invalid}
            <span class="px-2 text-red-500">Email and password are required</span>
        {/if}
        {#if form?.credentials}
            <span class="px-2 text-red-500">No account found with such credentials</span>
        {/if}
        <button class="transition ease-in-out duration-500 bg-primary-500 hover:bg-primary-700 w-full py-2 rounded-lg font-bold" type="submit">Log In</button>
    </form>
</div>
<p class="text-center">Not registered yet? <a class="hover:underline text-primary-500 hover:text-primary-700" href="/signup">Sign up</a></p>
