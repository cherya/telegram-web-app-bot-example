<script>
  import { TgUserStore } from "$lib/stores/tg-user-store";
  import { onMount } from "svelte";
  import { TgApp, CheckInitData } from "$lib/telegram";

  export let data; // see src/routes/+layout.server.js

  const userStore = TgUserStore();

  $userStore = data;

  onMount(async () => {
    if (!data.valid) {
      let resp = await CheckInitData();

      userStore.set(resp);
    }

    TgApp.init();
    TgApp.ready();
  });
</script>

<slot></slot>
