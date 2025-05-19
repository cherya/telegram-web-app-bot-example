<script>
  import { UserStore, initUser } from "$lib/stores/tg-user-store";
  import { onMount } from "svelte";
  import { TgApp } from "$lib/telegram";

  export let data; // see src/routes/+layout.server.js

  const userStore = UserStore(data.user);

  $userStore = data.user;

  // let charSyncInterval;

  onMount(async () => {
    if (!data.user.valid) {
      await initUser(userStore, Telegram.WebApp.initData);
    }

    TgApp.init();
    TgApp.ready();

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

<slot></slot>
