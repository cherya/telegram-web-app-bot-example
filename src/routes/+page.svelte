<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
  import {
    Avatar,
    Accordion,
    AccordionItem,
    ProgressBar,
  } from "@skeletonlabs/skeleton";

  import { TgApp } from "$lib/telegram";
  import { GetCharacter } from "$lib/character/character";
  import { TgUserStore, initTgUser } from "$lib/stores/tg-user-store";
  import { CharStore } from "$lib/stores/character-store";
  import UserHeader from "$lib/components/UserHeader.svelte";

  const userStore = TgUserStore();
  const charStore = CharStore();

  let sendData = "example send data";

  async function reValidateData() {
    initTgUser();
  }

  async function syncCharacter() {
    charStore.set({ ready: false });

    let resp = await GetCharacter();

    charStore.set({ ready: true, ...resp });
  }
</script>

<div class="container mx-auto p-6 space-y-4">
  <UserHeader
    user={$userStore.data?.user}
    loading={$userStore.loading}
    error={$userStore.error}
  />

  {#if $charStore.ready === true}
    <div class="sk-card sk-p-4 sk-mb-4">
      <h2 class="sk-text-xl sk-font-bold sk-mb-2">{$charStore.name}</h2>
      <div class="sk-mb-2">
        <strong>ID:</strong>
        {$charStore.id}
      </div>
      <div class="sk-mb-2">
        <strong>Skills:</strong>
        <ul>
          {#each $charStore.skills as skill}
            <li>{skill.name} (Level {skill.level})</li>
          {/each}
        </ul>
      </div>
      <div class="sk-mb-2">
        <strong>Gold:</strong>
        {$charStore.currencies.find((c) => c.id === "gold")?.amount ?? 0}
      </div>
    </div>
  {:else}
    <ProgressBar />
  {/if}
  <button
    on:click={syncCharacter}
    type="button"
    class="btn variant-filled rounded-md">Sync Character</button
  >

  <Accordion>
    <AccordionItem>
      <svelte:fragment slot="summary">test controls</svelte:fragment>
      <svelte:fragment slot="content">
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
            class="btn variant-filled rounded-md flex-1"
            >Toggle Main Button</button
          >
          <button
            on:click={() => TgApp.toggleBackButton()}
            type="button"
            class="btn variant-filled rounded-md flex-1"
            >Toggle Back Button</button
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
            on:click={() => TgApp.HapticFeedback.impactOccurred("soft")}
            >soft</button
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
            on:click={() =>
              TgApp.HapticFeedback.notificationOccurred("success")}
            >success</button
          >
          <button
            class="btn flex-1"
            on:click={() =>
              TgApp.HapticFeedback.notificationOccurred("warning")}
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
          <pre class="pre rounded-md">{JSON.stringify(
              $userStore.user,
              null,
              2,
            )}</pre>
        {:else if $userStore.valid === false}
          <div class="text-center">validation failded</div>
        {:else if $userStore.valid === null}
          <div class="placeholder animate-pulse rounded-md" />
        {/if}

        <button
          on:click={reValidateData}
          type="button"
          class="btn variant-filled rounded-md">Re-validate data</button
        >
      </svelte:fragment>
    </AccordionItem>
  </Accordion>
</div>

<style>
  pre {
    font-size: 12px;
  }
</style>
