<!-- a toast for displaying messages (Errors, infos and warnings) -->

<script lang="ts">
  export let type: "success" | "info" | "warning" | "error";
</script>

<!-- TODO icons depending on type -->

<div
  class="absolute top-4 left-1/2 -translate-x-1/2 bg-black h-12 w-[50vw] z-[9999] rounded-full flex items-center gap-4 p-4"
>
  <!-- toast icon -->
  <div>🧠</div>
  <!-- toast text content -->
  <p class="text-white">Toast content {type}</p>
</div>
