<script>
  import { IconMapSearch, IconX } from "@tabler/icons-svelte";
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  let isMapSearchOpen = false;
  let areSearchResultAvailable = false;

  //   only for dev remove onMount later
  //   onMount(() => {
  //     gsap.to(".map-search-input", {
  //       duration: 0.4,
  //       width: "80vw",
  //       padding: "16px",
  //       ease: "power2.inOut",
  //     });
  //   });

  function toggleMapSearch() {
    if (isMapSearchOpen) {
      isMapSearchOpen = false;
      gsap.to(".map-search-input", {
        duration: 0.4,
        width: "0vw",
        padding: "0px",
        ease: "power2.inOut",
      });
    } else {
      isMapSearchOpen = true;
      gsap.to(".map-search-input", {
        duration: 0.4,
        width: "80vw",
        padding: "16px",
        ease: "power2.inOut",
      });
    }
  }
</script>

<div class="z-[9999] fixed top-4 right-4 flex flex-col gap-2 text-white">
  <div class="flex items-center justify-between bg-black rounded-full">
    <input
      type="search"
      placeholder="Search for a place ..."
      class="h-full bg-black rounded-full w-[0vw] map-search-input"
    />
    <button
      class="p-4 rounded-full hover:bg-slate-600"
      on:click={toggleMapSearch}
    >
      {#if isMapSearchOpen}
        <IconX />
      {:else}
        <IconMapSearch />
      {/if}
    </button>
  </div>

  {#if isMapSearchOpen && areSearchResultAvailable}
    <menu class="w-full bg-green-500 divide-y rounded">
      {#each { length: 6 } as _, i}
        <li class="p-4">Hallo {i + 1}</li>
      {/each}
    </menu>
  {/if}
</div>
