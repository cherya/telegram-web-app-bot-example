<script>
  import { UserStore, initUser } from "$lib/stores/tg-user-store";
  import { navStack } from "$lib/stores/nav-stack";
  import { onMount } from "svelte";
  import { TgApp } from "$lib/telegram";
  import { beforeNavigate, afterNavigate, goto } from "$app/navigation";
  import { writable } from "svelte/store";

  export let data; // see src/routes/+layout.server.js

  const userStore = UserStore(data.user);

  $userStore = data.user;

  function handleBack() {
    navStack.pop(); // Remove current route
    const previousRoute = navStack.getCurrent();
    if (previousRoute) {
      goto(previousRoute);
    } else {
      // Fallback behavior, e.g., navigate to home
      goto("/");
    }
  }

  const nav = writable(false);
  beforeNavigate(() => ($nav = true));
  afterNavigate(({ to }) => {
    $nav = false;
    navStack.push(to.url.pathname);
  });

  // let charSyncInterval;

  onMount(async () => {
    if (!data.user.valid) {
      await initUser(userStore, Telegram.WebApp.initData);
    }

    TgApp.init();
    TgApp.ready();

    navStack.subscribe((stack) => {
      console.log("navStack", stack);
      if (stack.length > 1) {
        TgApp.BackButton.show();
      } else {
        TgApp.BackButton.hide();
      }
    });

    TgApp.BackButton.onClick(() => {
      handleBack();
    });

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

<div>
  {#if $nav}
    <div class="fixed top-0 left-0 w-full z-50">
      <div class="loader h-1 bg-blue-500 animate-pulse"></div>
    </div>
  {/if}

  <slot></slot>
</div>
