<script>
  import Nav from "$lib/Nav.svelte";
  import Toast from "$lib/Toast.svelte";
  import WeatherCard from "$lib/WeatherCard.svelte";
</script>

<main class="relative min-h-screen pb-20">
  <Toast type="success" duration={5000}>Toast is working nicely</Toast>

  <!-- current card info -->

  <section class="px-4 pt-4 flex flex-col gap-4">
    <p>--Location--</p>
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
  </section>

  <Nav />
</main>
