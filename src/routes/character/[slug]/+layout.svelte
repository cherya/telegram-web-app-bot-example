<script>
  import { onMount } from "svelte";
  import { CharStore } from "$lib/stores/character-store";

  export let data; // see src/routes/character/[slug]/+layout.server.js

  const charStore = CharStore(data.character);

  $charStore = data.character;

  onMount(() => {
    charStore.startActivity("Mining");
  });
</script>

<!-- loading indicator -->
<slot></slot>
