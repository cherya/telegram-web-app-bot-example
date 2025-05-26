<script lang="ts">
  import type { Character } from "../character/character";

  export let characters: Character[] | null = null;
</script>

{#if !characters || characters.length === 0}
  <div>No characters found. Create the first one!</div>
{:else}
  <ul class="list list-nav">
    {#each characters as char (char.id)}
      <li style="margin-bottom: 12px;">
        <a
          href={`/character/${char.id}`}
          class="flex-auto items-center space-x-2 rounded-md p-2 bg-secondary-500"
        >
          <strong>{char.name}</strong>
          <span>({char.id})</span>
        </a>
      </li>
    {/each}
  </ul>
{/if}
