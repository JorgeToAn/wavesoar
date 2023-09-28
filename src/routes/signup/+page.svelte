<script>
    import InputText from '$lib/components/inputs/InputText.svelte';
    import InputPassword from '$lib/components/inputs/InputPassword.svelte';
    import InputEmail from '$lib/components/inputs/InputEmail.svelte';
    import InputDate from '$lib/components/inputs/InputDate.svelte';
	import dayjs from 'dayjs';

    export let form;
</script>

<a href="/" class="font-title md:text-8xl text-4xl tracking-tight px-8 py-4">wavesoar</a>
<div class="md:w-1/2 md:mx-auto mx-8 mt-10 mb-2 border-2 rounded-lg">
    <div class="py-2 px-4">
        <h2 class="text-3xl py-2 px-2">Sign Up for <span class="font-title">wavesoar</span></h2>
        <hr class="border">
    </div>
    <form class="my-10 px-20" method="POST">
        <div class="my-10">
            <InputText css="w-full" label="Username" name="username" placeholder="Enter your username" required/>
        </div>
        <div class="my-10">
            <InputText css="w-full" label="First Name" name="first-name" placeholder="Enter your first name" required/>
        </div>
        <div class="my-10">
            <InputText css="w-full" label="Last Name" name="last-name" placeholder="Enter your last name"/>
        </div>
        <div class="my-10">
            <InputDate css="w-full" label="Date of Birth" name="birthdate" max={dayjs().format('YYYY-MM-DD')} required/>
        </div>
        <div class="my-10">
            <InputEmail css="w-full" label="Email" name="email" required/>
        </div>
        <div class="my-10">
            <InputPassword css="w-full" label="Password" name="password" pattern=".+" required/>
        </div>
        <div class="my-10">
            <InputPassword css="w-full" label="Confirm Password" name="confirm-password" pattern=".+" required/>
            {#if form?.password}
                <span class="px-2 text-red-500">Passwords must match</span>
            {/if}
        </div>
        <input class="transition ease-in-out duration-500 bg-primary-500 hover:bg-primary-700 w-full py-2 rounded-lg font-bold" type="submit" value="Sign Up">
    </form>
</div>