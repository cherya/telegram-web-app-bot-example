<script>
  import { onMount } from 'svelte';
  import { getCharacter } from './char';

  export let activity;
  export let isActive = false;

  let progressValue = 0;
  let animationFrameId;

  onMount(() => {
    updateProgress();
    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId); // Cancel animation frame when component is destroyed
    };
  });

  //NOTE: This function is called recursively to update the progress bar

  function updateProgress() {
    const lastRunTime = new Date(activity.last_run_at).getTime();
    const now = new Date().getTime();
    const timeElapsed = now - lastRunTime;
    const actionTimeoutMilliseconds = activity.action_timeout / 1e6; // Convert nanoseconds to milliseconds

    progressValue = (timeElapsed % actionTimeoutMilliseconds) / actionTimeoutMilliseconds * 100;

    if (progressValue > 100) {
      progressValue = 100;
    }

    animationFrameId = requestAnimationFrame(updateProgress); // Request the next animation frame
  }
</script>

<div class="activity-card {isActive ? 'active': ''}">
  <h3>{activity.name} {activity.experience.currentLevel}/{activity.experience.maxLevel}</h3>
  <p>Action Timeout: {activity.action_timeout}</p>
  <p>EXP per Action: {activity.activity_exp_per_action}</p>
  <p>Skill EXP per Action: {activity.skill_exp_per_action}</p>
  <p>Max EXP: {activity.experience.maxExp}</p>
  <p>EXP: {activity.experience.currentExp}/{activity.experience.nextLevelAt}</p>
  <progress value={activity.experience.currentExp} max={activity.experience.nextLevelAt}></progress>
  {#if isActive}
    <progress value={progressValue} max="100"></progress>
  {/if}
</div>

<style>
  .activity-card {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 10px;
    margin: 10px;
    background-color: #f9f9f9;
  }

  .activity-card h3 {
    margin-top: 0;
    color: #333;
  }

  .activity-card progress {
    width: 100%;
    height: 15px;
    border-radius: 3px;
    margin-top: 5px;
  }

  .active {
    background-color: #f0f0f0;
    border-color: black;
  }

  /* You can add more styling as needed */
</style>

