<!-- Menu for interacting with Leaflet map -->

<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    // gsap.to();
  });

  let isMenuOpen = true;

  function toggleMenu() {
    if (isMenuOpen) {
      gsap.to(".menu-button", {
        duration: 0.3,
        rotate: 0,
        ease: "power2.inOut",
      });
      isMenuOpen = false;
    } else {
      gsap.to(".menu-button", {
        duration: 0.3,
        rotate: 145,
        ease: "power2.inOut",
      });
      isMenuOpen = true;
    }
  }

  let mapLayers = ["streets", "dark", "light", "outdoors", "satellite"];
</script>

<!-- menu wrapper -->
<div
  class="z-[9999] fixed bottom-20 left-4 flex flex-col items-start justify-between gap-4"
>
  <!-- actual menu -->
  {#if isMenuOpen}
    <div class="bg-white p-4 rounded-lg w-[60vw]">
      <ul class="divide-y">
        {#each mapLayers as layer}
          <li class="py-2">{layer}</li>
        {/each}
      </ul>
    </div>
  {/if}

  <button
    on:click={toggleMenu}
    class="menu-button bg-black w-16 h-16 rounded-full flex items-center justify-center leading-none text-white text-4xl"
    >+
  </button>
</div>
