<script lang="ts">
  import { CharStore } from "$lib/stores/character-store";
  import { ProgressBar } from "@skeletonlabs/skeleton";

  export let data; // see src/routes/character/[slug]/+page.server.js

  const charStore = CharStore(data.character);

  $charStore = data.character;

  function startActivity(skillName: string) {
    charStore.startActivity(skillName);
  }
</script>

<div class="container mx-auto p-6 space-y-4">
  {#if !$charStore.loading}
    <div class="sk-card sk-p-4 sk-mb-4">
      <h2 class="sk-text-xl sk-font-bold sk-mb-2">{$charStore.data.name}</h2>
      <div class="sk-mb-2">
        <strong>ID:</strong>
        {$charStore.data.id}
      </div>
      <div class="sk-mb-2">
        <strong>Skills:</strong>
        <ul class="list">
          {#each $charStore.data.skills as skill}
            <li class="flex-auto">
              <span>
                {skill.name} (Level {skill.level}); XP: {skill.xp}
              </span>
              <button
                class="sk-button sk-button-primary sk-ml-2"
                on:click={() => startActivity(skill.name)}
              >
                start activity
              </button>
            </li>
          {/each}
        </ul>
      </div>
      <div class="sk-mb-2">
        <strong>Gold:</strong>
        {$charStore.data.currencies.find((c) => c.id === "gold")?.amount ?? 0}
      </div>
    </div>
  {:else}
    <ProgressBar />
  {/if}
</div>

<style>
</style>
