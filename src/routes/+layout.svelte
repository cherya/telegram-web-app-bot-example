<script>
  import { onMount } from "svelte";
  import { TgApp, CheckInitData } from "$lib/telegram";
  import { TgUserStore } from "$lib/stores/tg-user-store";

  const userStore = TgUserStore()

  onMount(async () => {
    try {
      const data = await CheckInitData();
      
      userStore.set({
        isValidTgUser: data.isValid,
        user: data.data.user
      });

      TgApp.init();
    } catch (error) {
      console.error(error);

      userStore.set({
        isValidTgUser: false,
        user: {}
      });
    }
  });
</script>

<slot></slot>