<!-- toast component with gsap animation to show messages -->

<script lang="ts">
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  export let type: "success" | "info" | "warning" | "error" = "info";

  export let duration = 3000;

  const ToastTypeIconMap = {
    success: "👍",
    info: "😞",
    warning: "⚠️",
    error: "❌",
  };

  onMount(() => {
    let tl = gsap.timeline();
    tl.from(".toast", {
      duration: 0.1,
      width: "3rem",
      height: "3rem",
    })
      .to(".toast", {
        duration: 0.2,
        top: "1rem",
        ease: "power2.out",
      })
      .to(".toast", {
        duration: 0.3,
        delay: 0.2,
        width: "60vw",
        ease: "power2.out",
      })
      .to(".toast-text", {
        display: "block",
        delay: 0.1,
      });

    setTimeout(() => {
      tl.reverse();
    }, duration);
  });
</script>

<div
  class="toast fixed -top-full left-1/2 -translate-x-1/2 bg-black z-[9999] rounded-full flex items-center gap-2 p-2 text-white"
>
  <!-- toast icon -->
  <div
    class="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full"
  >
    {ToastTypeIconMap[type]}
  </div>

  <!-- toast text content -->
  <p class="hidden toast-text">
    <slot />
  </p>
</div>
