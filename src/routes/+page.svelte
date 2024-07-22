<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
  import { TgApp, AppState, CheckInitData } from "$lib/telegram";
  import { onDestroy } from "svelte";
  import { Avatar } from "@skeletonlabs/skeleton";

  let valid = false;
  let userData = {};
  let sendData = "example";

  let unsubscribe = AppState.subscribe((value) => {
    valid = value.valid;
    userData = value.data.user;
  });

  let initData = TgApp.initData;
  if (initData === "") {
    initData =
      "query_id=AAEMjsEBAAAAAAyOwQGvrIHL&user=%7B%22id%22%3A29462028%2C%22first_name%22%3A%22Ilia%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22cherya%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721554069&hash=b9a1a2753acbd55e974fb118f3cc03ea484f98cac8e5c89f5aede16b4b8c2dab";
  }

  let validatePromise = CheckInitData(initData);

  validatePromise
    .then(() => {
      TgApp.init();
    })
    .catch((error) => {
      console.error(error);
    });

  function validateData(e) {
    try {
      validatePromise = CheckInitData(initData);
    } catch (error) {
      console.error(error);
    }
  }

  onDestroy(unsubscribe);
</script>

<div class="container container mx-auto p-6 space-y-4">
  {#if valid === false}
    <aside class="alert variant-filled-error rounded-md">
      <!-- Icon -->
      <div class="fa-solid fa-triangle-exclamation text-4xl" />
      <!-- Message -->
      <div class="alert-message">
          <h3 class="h3">Invalid initData</h3>
          <p>Can't validate the data. Ensure that page is opened from Telegram app and try again.</p>
      </div>
    </aside>
  {/if}

  <div class="flex">
    <div class="relative inline-block flex-none">
      {#if valid === true}
        <span class="badge-icon variant-filled-success absolute -bottom-0 -left-0 z-10"></span>
      {:else if valid === false}
        <span class="badge-icon variant-filled-error absolute -bottom-0 -left-0 z-10"></span>
      {:else if valid === null}
        <span class="badge-icon variant-filled-warning animate-pulse absolute -bottom-0 -left-0 z-10"></span>
      {/if}
  
      <Avatar />
    </div>
    {#if valid === true}
      <div class="flex-1 ml-8">
        <h1 class="text-2xl font-bold">{userData.first_name} {userData.last_name}</h1>
        <p class="text-gray-500">@{userData.username}</p>
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
    <button class="btn flex-1" on:click={() => TgApp.HapticFeedback.impactOccurred('heavy')}>heavy</button>
    <button class="btn flex-1" on:click={() => TgApp.HapticFeedback.impactOccurred('light')}>light</button>
    <button class="btn flex-1" on:click={() => TgApp.HapticFeedback.impactOccurred('medium')}>medium</button>
  </div>
  <div class="btn-group variant-filled rounded-md w-full flex">  
    <button class="btn flex-1" on:click={() => TgApp.HapticFeedback.impactOccurred('rigid')}>rigid</button>
    <button class="btn flex-1" on:click={() => TgApp.HapticFeedback.impactOccurred('soft')}>soft</button>
  </div>

  <h5 class="h5">Notification</h5>
  <div class="btn-group variant-filled rounded-md w-full flex">
    <button class="btn flex-1" on:click={() => TgApp.HapticFeedback.notificationOccurred('error')}>error</button>
    <button class="btn flex-1" on:click={() => TgApp.HapticFeedback.notificationOccurred('success')}>success</button>
    <button class="btn flex-1" on:click={() => TgApp.HapticFeedback.notificationOccurred('warning')}>warning</button>
  </div>

  <h5 class="h5">Selection</h5>
  <button class="btn variant-filled rounded-md w-full p-2" on:click={() => TgApp.HapticFeedback.selectionChanged()}>selection changed</button>

  <hr class="!border-t-4" />
  <h3 class="h3">sendData:</h3>
  <blockquote class="blockquote">Works only when open from inline keyboard button</blockquote>
  <input class="input rounded-md w-full p-2" title="Input (text)" type="text" placeholder="input text" bind:value={sendData}/>
  <button class="btn variant-filled rounded-md w-full p-2" type="button" on:click={() => TgApp.sendData(sendData)}>Send data from input to bot</button>

  <hr class="!border-t-4" />
  <h6 class="h6">initData:</h6>
  <pre class="pre rounded-md">{initData}</pre>

  <h6 class="h6">Validated user data:</h6>
  {#if valid === true}
    <pre class="pre rounded-md">{JSON.stringify(userData, null, 2)}</pre>
  {:else if valid === false}
    <div class="text-center">validation failded</div> 
  {:else if valid === null}
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
