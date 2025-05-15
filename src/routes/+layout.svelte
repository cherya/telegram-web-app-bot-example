<script>
  import { TgUserStore } from "$lib/stores/tg-user-store";
  import { CharStore } from "$lib/stores/character-store";
  import { onMount } from "svelte";
  import { TgApp, CheckInitData } from "$lib/telegram";
  import { GetCharacter } from "$lib/character/character";

  export let data; // see src/routes/+layout.server.js

  const userStore = TgUserStore();
  const charStore = CharStore();

  $userStore = data;

  onMount(async () => {
    if (!data.valid) {
      let resp = await CheckInitData();

      userStore.set(resp);
    }

    if ($userStore.user) {
      const char = await GetCharacter($userStore.user.id);
      charStore.set({ ...char, ready: true });
      console.log("Character data loaded", char);
    }

    TgApp.init();
    TgApp.ready();
  });
</script>

<slot></slot>
