<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let mapElement: HTMLDivElement;
  let map: L.Map;

  onMount(async () => {
    const leaflet = await import("leaflet");

    map = leaflet
      .map(mapElement, { zoomControl: false })
      .setView([51.505, -0.09], 13);

    // Add zoom control after removing it before
    leaflet.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    leaflet
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(map);

    leaflet.tileLayer
      .wms("https://a.tile.opentopomap.org/{z}/{x}/{y}.png")
      .addTo(map);

    leaflet
      .marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("<input type='text' placeholder='test popup'>");
    // .openPopup();
  });

  onDestroy(async () => {
    if (map) {
      console.log("Unloading Leaflet map.");
      map.remove();
    }
  });
</script>

<main>
  <div bind:this={mapElement}></div>
</main>

<style>
  main div {
    height: 850px;
  }
</style>
