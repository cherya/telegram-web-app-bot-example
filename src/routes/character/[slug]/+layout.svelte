<script>
  import { onMount } from "svelte";
  import { CharStore } from "$lib/stores/character-store";
  import { SyncCharacter } from "$lib/character/api";

  const charStore = CharStore();

  const charSyncTimeout = 15000;
  let syncInterval = null;

  onMount(async () => {
    syncInterval = setInterval(async () => {
      let char = charStore.get().data;
      if (!char || !char.id) {
        return;
      }

      char = await SyncCharacter(char.id);

      charStore.set({
        data: char,
        loading: false,
      });
    }, charSyncTimeout);

    return () => {
      clearInterval(syncInterval);
    };
  });
</script>

<slot></slot>
