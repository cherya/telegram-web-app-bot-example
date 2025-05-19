<script lang="ts">
  import type { Character } from "../character/character";

  export let characters: Character[] | null = null;
</script>

{#if !characters || characters.length === 0}
  <div>No characters found. Create the first one!</div>
{:else}
  <ul>
    {#each characters as char (char.id)}
      <li style="margin-bottom: 12px;">
        <a
          href={`/character/${char.id}`}
          style="text-decoration: none; color: #333;"
        >
          <strong>{char.name}</strong>
          <span style="color: #888;">({char.id})</span>
        </a>
      </li>
    {/each}
  </ul>
{/if}
