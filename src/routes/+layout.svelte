<script>
  import { TgUserStore, initTgUser } from "$lib/stores/tg-user-store";
  import { CharStore } from "$lib/stores/character-store";
  import { onMount, onDestroy } from "svelte";
  import { GetCharacter } from "$lib/character/character";

  export let data; // see src/routes/+layout.server.js

  const userStore = TgUserStore(data);
  const charStore = CharStore();

  $userStore = data;
  // let charSyncInterval;

  onMount(async () => {
    if (!data.valid) {
      initTgUser(userStore);
    }

    // if ($userStore.user) {
    //   const char = await GetCharacter($userStore.user.id);
    //   charStore.set({ ...char, ready: true });
    // }
    //
    // charSyncInterval = setInterval(async () => {
    //   if ($userStore.user) {
    //     const char = await GetCharacter($userStore.user.id);
    //     charStore.set({ ...char, ready: true });
    //   }
    // }, 10000);

    // return () => {
    //  clearInterval(charSyncInterval);
    // };
  });

  // onDestroy(() => {
  //   clearInterval(charSyncInterval);
  // });
</script>

<slot></slot>
