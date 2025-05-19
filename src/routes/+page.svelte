<script>
  import { UserStore, initUser } from "$lib/stores/tg-user-store";
  import UserHeader from "$lib/components/UserHeader.svelte";
  import CharacterSelection from "$lib/components/CharacterSelection.svelte";

  const userStore = UserStore();

  export let data;

  const chars = data.charactersList;
</script>

<div class="container mx-auto p-6 space-y-4">
  <UserHeader
    user={$userStore.data?.user}
    loading={$userStore.loading}
    error={$userStore.error}
  />

  <CharacterSelection characters={chars} />

  <!-- {#if !$charStore.loading} -->
  <!--   <div class="sk-card sk-p-4 sk-mb-4"> -->
  <!--     <h2 class="sk-text-xl sk-font-bold sk-mb-2">{$charStore.data.name}</h2> -->
  <!--     <div class="sk-mb-2"> -->
  <!--       <strong>ID:</strong> -->
  <!--       {$charStore.data.id} -->
  <!--     </div> -->
  <!--     <div class="sk-mb-2"> -->
  <!--       <strong>Skills:</strong> -->
  <!--       <ul> -->
  <!--         {#each $charStore.data.skills as skill} -->
  <!--           <li>{skill.name} (Level {skill.level})</li> -->
  <!--         {/each} -->
  <!--       </ul> -->
  <!--     </div> -->
  <!--     <div class="sk-mb-2"> -->
  <!--       <strong>Gold:</strong> -->
  <!--       {$charStore.data.currencies.find((c) => c.id === "gold")?.amount ?? 0} -->
  <!--     </div> -->
  <!--   </div> -->
  <!-- {:else} -->
  <!--   <ProgressBar /> -->
  <!-- {/if} -->
</div>

<style>
</style>
