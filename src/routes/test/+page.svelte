<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
  import { TgApp } from "$lib/telegram";
  import { UserStore, initUser } from "$lib/stores/tg-user-store";

  const userStore = UserStore();

  let sendData = "example send data";

  function reValidateData() {
    initUser(userStore);
  }
</script>

<div class="container">
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
  {#if $userStore.user}
    <pre class="pre rounded-md">{JSON.stringify($userStore.user, null, 2)}</pre>
  {:else}
    <div class="placeholder animate-pulse rounded-md" />
  {/if}

  <button
    on:click={reValidateData}
    type="button"
    class="btn variant-filled rounded-md">Re-validate data</button
  >
</div>

<style>
</style>
