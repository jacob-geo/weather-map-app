<script lang="ts">
  import { onMount } from "svelte";

  import savedLocations from "$lib/stores/savedLocationsStore";

  import Toast from "$lib/Toast.svelte";
  import WeatherCard from "$lib/WeatherCard.svelte";

  import {
    IconChevronCompactLeft,
    IconChevronCompactRight,
  } from "@tabler/icons-svelte";

  // export let data;

  let currentLocationIndex = 0;
  let carousel: HTMLElement;
  let swipeContainer: HTMLElement;

  function scrollCarousel() {
    carousel.scrollTo({
      left: currentLocationIndex * carousel.children[0].clientWidth,
      behavior: "smooth",
    });
  }

  function incrementCurrentLocationIndex() {
    if (currentLocationIndex + 1 > $savedLocations.length - 1) {
      currentLocationIndex = 0;
    } else {
      currentLocationIndex += 1;
    }

    scrollCarousel();
  }

  function decrementCurrentLocationIndex() {
    if (currentLocationIndex - 1 < 0) {
      currentLocationIndex = $savedLocations.length - 1;
    } else {
      currentLocationIndex -= 1;
    }

    scrollCarousel();
  }

  function setCurrentLocationIndex(value: number) {
    currentLocationIndex = value;

    scrollCarousel();
  }

  onMount(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    let swipeDistance = 0;
    const swipeThreshold = window.innerWidth * 0.5;

    swipeContainer.ontouchstart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    swipeContainer.ontouchend = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      swipeDistance = touchStartX - touchEndX;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) incrementCurrentLocationIndex();
        else decrementCurrentLocationIndex();

        scrollCarousel();
      }
    };
  });
</script>

<main class="relative min-h-screen pb-20" bind:this={swipeContainer}>
  <!-- <Toast type="success" duration={2000}>Toast is working nicely</Toast> -->

  <section class="flex flex-col gap-4 px-4 pt-4">
    <!-- switch between locations by swipe or arrow click at top -->
    <div class="flex items-center justify-between">
      <button on:click={decrementCurrentLocationIndex}>
        <IconChevronCompactLeft />
      </button>

      <ul
        class="flex overflow-x-scroll snap-mandatory snap-x scrollbar-hidden"
        bind:this={carousel}
      >
        {#each $savedLocations as location}
          <li
            class="flex-shrink-0 w-full text-center snap-center whitespace-nowrap"
          >
            {location.name}
          </li>
        {/each}
      </ul>

      <button on:click={incrementCurrentLocationIndex}>
        <IconChevronCompactRight />
      </button>
    </div>

    <div class="flex items-center justify-center">
      <ul class="flex items-center gap-3">
        {#each $savedLocations as _, i}
          <button
            on:click={() => setCurrentLocationIndex(i)}
            class="bg-black rounded-full
          {currentLocationIndex == i ? 'w-2 h-2' : 'w-1 h-1'}"
          >
          </button>
        {/each}
      </ul>
    </div>
  </section>

  <section class="flex flex-col gap-4 px-4 pt-4">
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
  </section>
</main>
