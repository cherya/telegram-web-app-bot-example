<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
  import SkillCard from "$lib/SkillCard.svelte";
  import { fetchCharacter, fetchCharacterMock } from "$lib/char";
  import { onMount } from "svelte";

  let characterData = { skills: [], currentActivity: null };
  let selectedSkillId = null;
  let interval = null;
  let isSyncing = false;
  let syncInterval = 1000;

  onMount(async () => {
    try {
      await syncCharacter();
      selectedSkillId = characterData.currentActivity.skillId;
    } catch (error) {
      console.error("Error fetching character data:", error);
      // Handle the error appropriately
    }
  });

  async function syncCharacter() {
    if (isSyncing) return;

    isSyncing = true;

    try {
      const newCharacterData = await fetchCharacterMock();
      
      characterData = { ...newCharacterData };

      if (characterData.currentActivity) {
        console.log("chaging sync interval to:", characterData.currentActivity.action_timeout / 1e6)
        syncInterval = characterData.currentActivity.action_timeout / 1e6;
      }

    } catch (error) {
      console.error("Error syncing character data:", error);
    } finally {
      isSyncing = false;
    }
  }

  function selectSkill(skillId) {
    if (skillId) {
      selectedSkillId = skillId;

      console.log("Selected skill:", selectedSkillId);
    }
  }

  if (characterData.currentActivity) {
    selectedSkillId = characterData.currentActivity.skill_id; // TODO
  }

  $: selectedSkill = characterData.skills.find(
    (skill) => skill.id === selectedSkillId,
  );

  $: {
    clearInterval(interval);
    interval = setInterval(syncCharacter, syncInterval);
  }
  
</script>

<div class="container">
  <aside>
    {#each characterData.skills as skill}
      <div
        class="skill {selectedSkillId === skill.id ? 'active' : ''}"
        on:click={() => selectSkill(skill.id)}
      >
        <p>{skill.name}</p>
        <p>
          Level: {skill.experience.currentLevel}/{skill.experience.maxLevel}
        </p>
      </div>
    {/each}
  </aside>
  <main>
    {#if selectedSkillId}
      <SkillCard
        skill={selectedSkill}
        runningActivityId={characterData.currentActivity.id}
      />
    {:else}
      <p>Select a skill to view details</p>
    {/if}
  </main>
</div>

<style>
  .container {
    display: flex;
  }

  aside {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    border-right: 1px solid #ddd;
    padding: 10px;
  }

  .skill {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
  }

  .skill.active {
    background-color: #f0f0f0;
  }

  main {
    margin-left: 200px;
    padding: 20px;

    width: 100%;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #eaeaea;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
