<script lang="ts">
  import { Avatar } from "@skeletonlabs/skeleton";
  import type { User } from "$types/user";

  export let user: User | null = null;
  export let loading: boolean = false;
  export let error: string | null = null;
</script>

{#if error}
  <aside class="alert variant-filled-error rounded-md">
    <div class="fa-solid fa-triangle-exclamation text-4xl" />
    <div class="alert-message">
      <h3 class="h3">Invalid initData</h3>
      <p>{error}</p>
    </div>
  </aside>
{/if}

<div class="flex">
  <div class="relative inline-block flex-none">
    {#if loading}
      <span
        class="badge-icon variant-filled-warning animate-pulse absolute -bottom-0 -left-0 z-10"
      />
      <Avatar />
    {:else}
      <span
        class="badge-icon variant-filled-success absolute -bottom-0 -left-0 z-10"
      />
      <Avatar src={user?.photo_url} />
    {/if}
  </div>
  {#if user}
    <div class="flex-1 ml-8">
      <h1 class="text-2xl font-bold">
        {user.first_name}
        "{user.username}"
        {user.last_name}
      </h1>
      <p class="text-gray-500">@{user.username}</p>
    </div>
  {:else}
    <div class="flex-1 ml-8">
      <div class="placeholder animate-pulse rounded-md mt-2"></div>
      <div class="placeholder animate-pulse rounded-md mt-4"></div>
    </div>
  {/if}
</div>
