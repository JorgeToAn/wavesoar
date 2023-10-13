<script>
    import { queue, queueIndex } from '$lib/stores.js';

    let paused = true;
    let muted = false;
    let volume;
    let currentTimeDisplay = '00:00';
    let currentTime;
    let durationDisplay = '00:00';
    let duration;

    let audioPlayer;
    let playBtn;
    let seekSlider;
    let volumeBtn;
    let volumeSlider;
    let prevVolume = 100;

    function reset() {
        seekSlider.value = 0;
    }

    async function loadSong() {
        reset();
        if ($queue.length) {
            audioPlayer.src = $queue[$queueIndex].file_url;
            await audioPlayer.load();
        }
    }

    function playSong() {
        audioPlayer.play();
        paused = false;
    }

    function pauseSong() {
        audioPlayer.pause();
        paused = true;
    }

    function togglePlay() {
        paused ? playSong() : pauseSong();
    }

    async function nextSong() {
        if ($queueIndex + 1 >= $queue.length) {
            $queueIndex = 0;
            await loadSong();
            pauseSong()
        } else {
            $queueIndex = $queueIndex + 1;
            await loadSong();
            playSong();
        }
    }

    async function prevSong() {
        if ($queueIndex != 0) {
            $queueIndex = $queueIndex - 1;
            await loadSong();
            playSong();
        }
    }

    function mute() {
        prevVolume = volumeSlider.value;
        volumeSlider.value = 0;
        audioPlayer.volume = 0;
        muted = true;
        volumeBtn.innerHTML = '<i class="bi bi-volume-mute-fill"><i/>';
    }

    function unmute() {
        volumeSlider.value = prevVolume;
        audioPlayer.volume = prevVolume / 100;
        muted = false;
        volumeBtn.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
    }

    function toggleSound() {
        muted ? unmute() : mute();
    }

    function handleVolume(event) {
        let newVolume = parseInt(event.target.value);
        if (newVolume === 0) {
            mute();
        } else {
            muted = false;
            volume = newVolume / 100;
            volumeBtn.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
        }
    }

    // TODO
    // handleLike()

    function handleSeek(event) {
        let seekvalue = audioPlayer.duration * (event.target.value / 100);
        audioPlayer.currentTime = seekvalue;
        seekSlider.blur();
    }

    // update song's current time and slider
    $: {
        if (!isNaN(currentTime)) {
            // avoid changing the slider while the user is interacting with it
            if (document.activeElement !== seekSlider) {
                let seekPosition = 0;
                seekPosition = currentTime * (100 / duration);
                seekSlider.value = seekPosition;
            }
            let currentMinutes = Math.floor(currentTime / 60);
            let currentSeconds = Math.floor(currentTime - (currentMinutes * 60));

            if (currentSeconds < 10) { currentSeconds = '0' + currentSeconds; }
            if (currentMinutes < 10) { currentMinutes = '0' + currentMinutes; }
            currentTimeDisplay = currentMinutes + ':' + currentSeconds;
        } else {
            currentTimeDisplay = '00:00';
        }
    }

    // update song's duration
    $: {
        if (!isNaN(duration)) {
            let durationMinutes = Math.floor(duration / 60);
            let durationSeconds = Math.floor(duration - (durationMinutes * 60));

            if (durationMinutes < 10) { durationMinutes = '0' + durationMinutes; }
            if (durationSeconds < 10) { durationSeconds = '0' + durationSeconds; }
            durationDisplay = durationMinutes + ':' + durationSeconds;
        } else {
            durationDisplay = '00:00';
        }
    }
</script>

<div class="slider flex justify-center items-center">
    <span class="bg-white text-dark px-2 rounded-full select-none">{currentTimeDisplay}</span>
    <input bind:this={seekSlider} on:change={handleSeek} type="range" value="0" class="w-7/12 h-2 mx-4 text-sm bg-primary-900 rounded-full appearance-none cursor-pointer transition ease-in hover:bg-primary-600">
    <span class="bg-white text-dark px-2 rounded-full select-none">{durationDisplay}</span>
</div>
<div class="my-2 flex justify-evenly items-center translate-x-10">
    <div>
        <button class="w-10 h-10 bg-transparent text-white text-3xl rounded-full transition ease-in hover:bg-light hover:text-dark active:scale-90"><i class="bi bi-heart"></i></button>
    </div>
    <div class="flex justify-center items-center">
        <button on:click={prevSong} class="mx-2 bg-transparent text-white text-5xl rounded-full transition ease-in hover:bg-light hover:text-dark active:scale-90"><i class="bi bi-skip-start-fill"></i></button>
        <button bind:this={playBtn} on:click={togglePlay} class="mx-2 bg-transparent text-white text-8xl rounded-full transition ease-in hover:bg-light hover:text-dark active:scale-90">
            {#if paused}
                <i class="bi bi-play-fill"></i>
            {:else}
                <i class="bi bi-pause-fill"></i>
            {/if}
        </button>
        <button on:click={nextSong} class="mx-2 bg-transparent text-white text-5xl rounded-full transition ease-in hover:bg-light hover:text-dark active:scale-90"><i class="bi bi-skip-end-fill"></i></button>
    </div>
    <div class="pr-2 group flex items-center bg-transparent hover:bg-white rounded-full -translate-x-10">
        <button bind:this={volumeBtn} on:click={toggleSound} class="w-10 h-10 bg-transparent text-white text-3xl rounded-full transition ease-in hover:bg-light hover:text-dark group-hover:text-dark active:scale-90 translate-x-20 group-hover:translate-x-0"><i class="bi bi-volume-up-fill"></i></button>
        <input bind:this={volumeSlider} on:change={handleVolume} on:input={handleVolume} id="volume_slider" type="range" value="100" class="invisible group-hover:visible w-20 h-2 text-sm bg-primary-900 rounded-full appearance-none cursor-pointer transition ease-in hover:bg-primary-600">
    </div>
</div>
<audio
    id="player"
    src={$queue[$queueIndex]?.file_url}
    bind:this={audioPlayer}
    bind:paused
    bind:muted
    bind:volume
    bind:currentTime
    bind:duration
    on:ended={nextSong}
/>