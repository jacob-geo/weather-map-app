<script>
  import LeafletMap from "$lib/LeafletMap.svelte";
  import MapMenu from "$lib/MapMenu.svelte";
  import Nav from "$lib/Nav.svelte";
  import Toast from "$lib/Toast.svelte";
</script>

<main class="relative">
  <Toast type="success" duration={5000}>Toast is working nicely</Toast>
  <LeafletMap />
  <MapMenu />
  <Nav />
</main>
