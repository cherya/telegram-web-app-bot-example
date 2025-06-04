<script lang="ts">
  import { CharStore } from "$lib/stores/character-store";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";

  export let data; // see src/routes/character/[slug]/+page.server.js
  const charStore = CharStore(data.character);

  $charStore = data.character;

  const progress = charStore.progress;

  onMount(() => {
    const activity = $charStore.data.currentActivity;
    if (activity) {
      charStore.startActivity(activity);
    }

    return () => {
      charStore.stopActivity();
    };
  });

  function startActivity(skillName: string) {
    charStore.startActivity(skillName);
  }
</script>

<div class="container mx-auto p-6 space-y-4">
  {#if !$charStore.loading}
    <div class="p-4 mb-4">
      <h2 class="text-xl font-bold mb-2">{$charStore.data.name}</h2>
      <hr class="mb-4" />
      <div class="mb-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          <div class="mb-2">
            <strong class="text-lg">Skills:</strong>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
            >
              {#each $charStore.data.skills as skill}
                <div
                  class="w-full rounded-lg shadow p-4 flex flex-col items-start border hover:shadow-lg transition-shadow min-h-[120px] bg-background text-foreground"
                >
                  <div class="font-bold text-lg mb-2 flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      ><circle cx="12" cy="12" r="10" /><path
                        d="M12 6v6l4 2"
                      /></svg
                    >
                    {skill.name}
                  </div>
                  <div class="mb-1">
                    <span class="font-semibold">Level:</span>
                    {skill.level}
                  </div>
                  <div class="mb-2">
                    <span class="font-semibold">XP:</span>
                    {skill.xp}
                  </div>

                  {#if skill.name === $charStore.data.currentActivity}
                    <div class="text-sm text-green-600">
                      <strong>Active</strong>
                    </div>
                    <progress value={$progress * 100} max="100" />
                  {:else}
                    <button
                      class="mt-auto py-1 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition-colors"
                      on:click={() => startActivity(skill.name)}
                    >
                      Start Activity
                    </button>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <ProgressBar />
  {/if}
</div>

<style>
</style>
