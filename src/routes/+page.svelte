<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
  import { TgApp, CheckInitData } from "$lib/telegram";
  import { Avatar } from "@skeletonlabs/skeleton";
  import { TgUserStore } from "$lib/stores/tg-user-store";

  const userStore = TgUserStore();

  let sendData = "example send data";

  async function validateData(e) {
    userStore.set({ valid: null, user: {} });

    let resp = await CheckInitData();

    userStore.set(resp);
  }
</script>

<div class="container container mx-auto p-6 space-y-4">
  {#if $userStore.valid === false}
    <aside class="alert variant-filled-error rounded-md">
      <!-- Icon -->
      <div class="fa-solid fa-triangle-exclamation text-4xl" />
      <!-- Message -->
      <div class="alert-message">
        <h3 class="h3">Invalid initData</h3>
        <p>
          Can't validate the data. Ensure that page is opened from Telegram app
          and try again.
        </p>
      </div>
    </aside>
  {/if}

  <div class="flex">
    <div class="relative inline-block flex-none">
      {#if $userStore.valid === true}
        <span
          class="badge-icon variant-filled-success absolute -bottom-0 -left-0 z-10"
        ></span>
      {:else if $userStore.valid === false}
        <span
          class="badge-icon variant-filled-error absolute -bottom-0 -left-0 z-10"
        ></span>
      {:else if $userStore.valid === null}
        <span
          class="badge-icon variant-filled-warning animate-pulse absolute -bottom-0 -left-0 z-10"
        ></span>
      {/if}

      <Avatar src={$userStore.user.photo_url} />
    </div>
    {#if $userStore.valid === true}
      <div class="flex-1 ml-8">
        <h1 class="text-2xl font-bold">
          {$userStore.user.first_name}
          "{$userStore.user.username}"
          {$userStore.user.last_name}
        </h1>
        <p class="text-gray-500">@{$userStore.user.username}</p>
      </div>
    {:else}
      <div class="flex-1 ml-8">
        <div class="placeholder animate-pulse rounded-md mt-2"></div>
        <div class="placeholder animate-pulse rounded-md mt-4"></div>
      </div>
    {/if}
  </div>

  <hr class="!border-t-4" />

  <div class="flex space-x-2">
    <button
      on:click={() => TgApp.expand()}
      type="button"
      class="btn variant-filled rounded-md flex-1">Expand WebView</button
    >

    <button
      on:click={() => TgApp.close()}
      type="button"
      class="btn variant-filled rounded-md flex-1">Close WebView</button
    >
  </div>

  <div class="flex space-x-2">
    <button
      on:click={() => TgApp.toggleMainButton()}
      type="button"
      class="btn variant-filled rounded-md flex-1">Toggle Main Button</button
    >
    <button
      on:click={() => TgApp.toggleBackButton()}
      type="button"
      class="btn variant-filled rounded-md flex-1">Toggle Back Button</button
    >
  </div>

  <hr class="!border-t-4" />
  <h3 class="h3">Haptics:</h3>
  <h5 class="h5">Impact</h5>
  <div class="btn-group variant-filled rounded-md w-full flex">
    <button
      class="btn flex-1"
      on:click={() => TgApp.HapticFeedback.impactOccurred("heavy")}
      >heavy</button
    >
    <button
      class="btn flex-1"
      on:click={() => TgApp.HapticFeedback.impactOccurred("light")}
      >light</button
    >
    <button
      class="btn flex-1"
      on:click={() => TgApp.HapticFeedback.impactOccurred("medium")}
      >medium</button
    >
  </div>
  <div class="btn-group variant-filled rounded-md w-full flex">
    <button
      class="btn flex-1"
      on:click={() => TgApp.HapticFeedback.impactOccurred("rigid")}
      >rigid</button
    >
    <button
      class="btn flex-1"
      on:click={() => TgApp.HapticFeedback.impactOccurred("soft")}>soft</button
    >
  </div>

  <h5 class="h5">Notification</h5>
  <div class="btn-group variant-filled rounded-md w-full flex">
    <button
      class="btn flex-1"
      on:click={() => TgApp.HapticFeedback.notificationOccurred("error")}
      >error</button
    >
    <button
      class="btn flex-1"
      on:click={() => TgApp.HapticFeedback.notificationOccurred("success")}
      >success</button
    >
    <button
      class="btn flex-1"
      on:click={() => TgApp.HapticFeedback.notificationOccurred("warning")}
      >warning</button
    >
  </div>

  <h5 class="h5">Selection</h5>
  <button
    class="btn variant-filled rounded-md w-full p-2"
    on:click={() => TgApp.HapticFeedback.selectionChanged()}
    >selection changed</button
  >

  <hr class="!border-t-4" />
  <h3 class="h3">sendData:</h3>
  <blockquote class="blockquote">
    Works only when open from inline keyboard button
  </blockquote>
  <input
    class="input rounded-md w-full p-2"
    title="Input (text)"
    type="text"
    placeholder="input text"
    bind:value={sendData}
  />
  <button
    class="btn variant-filled rounded-md w-full p-2"
    type="button"
    on:click={() => TgApp.sendData(sendData)}
    >Send data from input to bot</button
  >

  <hr class="!border-t-4" />

  <h6 class="h6">Validated user data:</h6>
  {#if $userStore.valid === true}
    <pre class="pre rounded-md">{JSON.stringify($userStore.user, null, 2)}</pre>
  {:else if $userStore.valid === false}
    <div class="text-center">validation failded</div>
  {:else if $userStore.valid === null}
    <div class="placeholder animate-pulse rounded-md" />
  {/if}

  <button
    on:click={validateData}
    type="button"
    class="btn variant-filled rounded-md">Re-validate data</button
  >
</div>

<style>
  pre {
    font-size: 12px;
  }
</style>
