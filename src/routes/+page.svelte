<script>
  import currentLocation from "$lib/stores/currentLocationStore";
  import Toast from "$lib/Toast.svelte";
  import WeatherCard from "$lib/WeatherCard.svelte";
</script>

<main class="relative min-h-screen pb-20">
  <Toast type="success" duration={5000}>Toast is working nicely</Toast>

  <!-- current card info -->

  <section class="flex flex-col gap-4 px-4 pt-4">
    <!-- switch between locations by swipe or arrow click at top -->
    <div class="flex items-center justify-between">
      <!-- button: on:click currentLocationIndex -= 1 -->
      *
      <p>{$currentLocation.name}</p>
      <!-- button: on:click currentLocationIndex += 1 -->
      *
    </div>

    <!-- alternatively: dropdown with list of locations -->
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
  </section>
</main>
