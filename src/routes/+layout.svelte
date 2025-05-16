<script>
  import { TgUserStore } from "$lib/stores/tg-user-store";
  import { CharStore } from "$lib/stores/character-store";
  import { onMount, onDestroy } from "svelte";
  import { TgApp, CheckInitData } from "$lib/telegram";
  import { GetCharacter } from "$lib/character/character";

  export let data; // see src/routes/+layout.server.js

  const userStore = TgUserStore();
  const charStore = CharStore();

  $userStore = data;

  let charSyncInterval;

  onMount(async () => {
    if (!data.valid) {
      const resp = await CheckInitData();
      userStore.set(resp);
    }

    if ($userStore.user) {
      const char = await GetCharacter($userStore.user.id);
      charStore.set({ ...char, ready: true });
    }

    charSyncInterval = setInterval(async () => {
      if ($userStore.user) {
        const char = await GetCharacter($userStore.user.id);
        charStore.set({ ...char, ready: true });
      }
    }, 10000);

    TgApp.init();
    TgApp.ready();

    return () => {
      clearInterval(charSyncInterval);
    };
  });

  onDestroy(() => {
    clearInterval(charSyncInterval);
  });
</script>

<slot></slot>
