<script>
  import LeafletMap from "$lib/LeafletMap.svelte";
  import Nav from "$lib/Nav.svelte";
  import Toast from "$lib/Toast.svelte";
</script>

<main class="relative">
  <Toast type="info" />
  <LeafletMap />
  <Nav />
</main>
