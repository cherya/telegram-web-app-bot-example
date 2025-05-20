<script>
  import { UserStore } from "$lib/stores/tg-user-store";
  import UserHeader from "$lib/components/UserHeader.svelte";
  import CharacterSelection from "$lib/components/CharacterSelection.svelte";
  import { ProgressBar } from "@skeletonlabs/skeleton";

  const userStore = UserStore();
</script>

<div class="container mx-auto p-6 space-y-4">
  <UserHeader
    user={$userStore.data?.user}
    loading={$userStore.loading}
    error={$userStore.error}
  />
  {#if $userStore.loading}
    <ProgressBar />
  {:else}
    <CharacterSelection characters={$userStore.data.characters} />
  {/if}
</div>

<style>
</style>
