<script>
  import { UserStore, initUser } from "$lib/stores/tg-user-store";
  import { CharStore, initCharacter } from "$lib/stores/character-store";
  import { onMount } from "svelte";

  export let data; // see src/routes/+layout.server.js

  const userStore = UserStore(data.user);

  $userStore = data.user;

  const charactersList = data.charactersList;

  // let charSyncInterval;

  onMount(async () => {
    if (!data.user.valid) {
      await initUser(userStore);
    }

    // charSyncInterval = setInterval(async () => {
    //   if ($userStore.user) {
    //     const char = await GetCharacter($userStore.user.id);
    //     charStore.set({ ...char, ready: true });
    //   }
    // }, 10000);
    //
    return () => {
      // clearInterval(charSyncInterval);
    };
  });

  // onDestroy(() => {
  //   clearInterval(charSyncInterval);
  // });
</script>

<slot chars={charactersList}></slot>
