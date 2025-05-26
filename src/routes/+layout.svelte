<script>
  import { UserStore, initUser } from "$lib/stores/tg-user-store";
  import { NavStack } from "$lib/stores/nav-stack";
  import { onMount } from "svelte";
  import { TgApp } from "$lib/telegram";
  import { beforeNavigate, afterNavigate, goto } from "$app/navigation";
  import { writable } from "svelte/store";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import UserHeader from "$lib/components/UserHeader.svelte";

  export let data; // see src/routes/+layout.server.js

  const userStore = UserStore(data.user);

  $userStore = data.user;

  function handleBack() {
    NavStack.pop(); // Remove current route
    const previousRoute = NavStack.getCurrent();
    if (previousRoute) {
      goto(previousRoute);
    } else {
      // Fallback behavior, e.g., navigate to home
      goto("/");
    }
  }

  const navigating = writable(false);
  beforeNavigate(() => ($navigating = true));
  afterNavigate(({ to }) => {
    $navigating = false;
    NavStack.push(to.url.pathname);
  });

  // let charSyncInterval;

  onMount(async () => {
    if (!$userStore.data.user) {
      await initUser(userStore, Telegram.WebApp.initData);
    }

    TgApp.init();
    TgApp.ready();

    NavStack.subscribe((stack) => {
      if (stack.length > 1) {
        TgApp.BackButton.show();
      } else {
        TgApp.BackButton.hide();
      }
    });

    TgApp.BackButton.onClick(() => {
      handleBack();
    });
  });
</script>

<!-- loading indicator -->
{#if $navigating}
  <div class="absolute top-0 left-0 w-full z-50">
    <ProgressBar
      animIndeterminate="anim-progress-bar"
      meter="bg-secondary-500"
      track="bg-secondary-500/30"
      height="h-1"
    />
  </div>
{/if}

<div class="container mx-auto p-6 space-y-4">
  <UserHeader
    user={$userStore.data?.user}
    loading={$userStore.loading}
    error={$userStore.error}
  />
</div>

<slot></slot>

<style>
  :global(.anim-progress-bar) {
    transform-origin: 0% 50%;
    animation: anim-progress-bar 2s infinite linear;
  }

  @keyframes anim-progress-bar {
    0% {
      transform: translateX(50%) scaleX(0.5);
    }
    50% {
      transform: translateX(0) scaleX(0.5);
    }
    100% {
      transform: translateX(50%) scaleX(0.5);
    }
  }
</style>
