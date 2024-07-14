<script>
  import ActivityCard from './ActivityCard.svelte';
  export let skill;
  export let runningActivityId = null;

  function startActivity(activityId, skillId) {
    fetch(`http://localhost:8080/api/actions/${skillId}/${activityId}/start`, {
      method: 'POST',
    });
  }

</script>

<div class="skill-card">
  <div>
    <h2>{skill.name} {skill.experience.currentLevel}/{skill.experience.maxLevel}</h2>
    <p>Max EXP: {skill.experience.maxExp}</p>
    <p>EXP: {skill.experience.currentExp}/{skill.experience.nextLevelAt}</p>
    <progress value={skill.experience.currentExp} max={skill.experience.nextLevelAt}></progress>
  </div>
  
  <div class="activities">
    {#each skill.activities as activity}
      <div on:click={() => startActivity(activity.id, skill.id)}>
        <ActivityCard {activity} isActive={runningActivityId === activity.id} />
      </div>
    {/each}
  </div>
</div>

<style>
.activities {
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.skill-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  font-size: 0.8rem;
}

.skill-card h2 {
  margin-top: 0;
  color: #333;
  font-size: 1rem;
}

.activity {
  border-top: 1px solid #eee;
  padding-top: 5px;
  margin-top: 5px;
}

.activity h3 {
  margin-top: 0;
  color: #666;
  font-size: 0.9rem;
}

progress {
  width: 100%;
  height: 15px;
  border-radius: 3px;
}

progress::-webkit-progress-bar {
  background-color: #eee;
}

progress::-webkit-progress-value {
  background-color: #4caf50;
}

progress::-moz-progress-bar {
  background-color: #4caf50;
}
</style>

