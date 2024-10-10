<script lang="ts">
  import {
    IconLayoutDashboard,
    IconMap,
    IconSettings,
  } from "@tabler/icons-svelte";
</script>

<nav class="fixed bottom-0 w-full text-white bg-black">
  <ul class="flex items-center justify-evenly">
    <li class="p-4">
      <a href="/">
        <IconLayoutDashboard />
      </a>
    </li>
    <li class="p-4">
      <a href="/map">
        <IconMap />
      </a>
    </li>
    <li class="p-4">
      <a href="/settings">
        <IconSettings />
      </a>
    </li>
  </ul>
</nav>

<!-- 
IconLayoutDashboard
IconMap
IconSettings


# for map route
IconInfoCircle

IconMapSearch

IconSearch

IconPlus
-->
