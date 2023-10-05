<script>
    import { onMount } from 'svelte';
    import { queue } from '$lib/stores.js';

    let paused = false;
    let muted;
    let volume;
    let currentTimeDisplay = '00:00';
    let currentTime;
    let durationDisplay = '00:00';
    let duration;
    let queueIndex = 0;

    let audioPlayer;
    let playBtn;
    let seekSlider;
    let volumeBtn;
    let volumeSlider;
    let prevVolume = 100;

    function reset() {
        seekSlider.value = 0;
    }

    function loadSong() {
        reset();
        if ($queue.length) {
            audioPlayer.src = $queue[queueIndex].url;
            audioPlayer.load();
        }
    }

    function playSong() {
        audioPlayer.play();
        paused = false;
        console.log(audioPlayer.src);
        playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }

    function pauseSong() {
        audioPlayer.pause();
        paused = true;
        playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
    }

    function togglePlay() {
        paused ? playSong() : pauseSong();
    }

    function nextSong() {
        queueIndex++;
        if (queueIndex >= $queue.length) {
            queueIndex = 0;
            loadSong();
            pauseSong()
        } else {
            loadSong();
            playSong();
        }
    }

    function prevSong() {
        queueIndex--;
        if (queueIndex <= 0) {
            queueIndex = 0;
        }
        loadSong();
        playSong();
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

    // update song's current time and slider
    $: {
        if (!isNaN(currentTime)) {
            let seekPosition = 0;
            seekPosition = currentTime * (100 / duration);
            seekSlider.value = seekPosition;

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

    onMount(() => {
        loadSong();
    });
</script>

<div class="slider flex justify-center items-center">
    <span class="bg-white text-dark px-2 rounded-full select-none">{currentTimeDisplay}</span>
    <input bind:this={seekSlider} type="range" value="0" class="w-7/12 h-2 mx-4 text-sm bg-primary-900 rounded-full appearance-none cursor-pointer transition ease-in hover:bg-primary-600">
    <span class="bg-white text-dark px-2 rounded-full select-none">{durationDisplay}</span>
</div>
<div class="my-2 flex justify-evenly items-center translate-x-10">
    <div>
        <button class="w-10 h-10 bg-transparent text-white text-3xl rounded-full transition ease-in hover:bg-light hover:text-dark active:scale-90"><i class="bi bi-heart"></i></button>
    </div>
    <div class="flex justify-center items-center">
        <button on:click={prevSong} class="mx-2 bg-transparent text-white text-5xl rounded-full transition ease-in hover:bg-light hover:text-dark active:scale-90"><i class="bi bi-skip-start-fill"></i></button>
        <button bind:this={playBtn} on:click={togglePlay} class="mx-2 bg-transparent text-white text-8xl rounded-full transition ease-in hover:bg-light hover:text-dark active:scale-90"><i class="bi bi-play-fill"></i></button>
        <button on:click={nextSong} class="mx-2 bg-transparent text-white text-5xl rounded-full transition ease-in hover:bg-light hover:text-dark active:scale-90"><i class="bi bi-skip-end-fill"></i></button>
    </div>
    <div class="pr-2 group flex items-center bg-transparent hover:bg-white rounded-full -translate-x-10">
        <button bind:this={volumeBtn} on:click={toggleSound} class="w-10 h-10 bg-transparent text-white text-3xl rounded-full transition ease-in hover:bg-light hover:text-dark group-hover:text-dark active:scale-90 translate-x-20 group-hover:translate-x-0"><i class="bi bi-volume-up-fill"></i></button>
        <input bind:this={volumeSlider} on:change={handleVolume} on:input={handleVolume} id="volume_slider" type="range" value="100" class="invisible group-hover:visible w-20 h-2 text-sm bg-primary-900 rounded-full appearance-none cursor-pointer transition ease-in hover:bg-primary-600">
    </div>
</div>
<audio
    id="player"
    src={$queue[queueIndex]?.url}
    bind:this={audioPlayer}
    bind:paused
    bind:muted
    bind:volume
    bind:currentTime
    bind:duration
    on:ended={nextSong}
/>