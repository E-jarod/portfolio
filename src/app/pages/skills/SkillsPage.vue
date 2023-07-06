<script setup lang="ts">
// import WorkInProgress from '@app/shared/components/WorkInProgress.vue';
// number 18
// number 20
// number 27
// https://learntocodewith.me/posts/portfolio-tips/
import { reactive } from 'vue';

export interface IRadarSkill {
  label: string;
  value: string | number;
}

const state = reactive({
  radarSkills: [] satisfies IRadarSkill[],
});
</script>

<template>
  <!-- todo vim : format on save prettier -->
  <!-- todo vim : sidebar to right -->
  <!-- todo vim : unit tests -->
  <!-- todo vim : copy paste -->
  <h1 class="text-3xl font-bold">Skills</h1>

  <div class="flex w-full justify-between">
    <h2 class="text-xl text-red-500 font-bold">Radar chart</h2>
    {{ state.radarSkills.length }}
    <div>view selector</div>
  </div>

  <div class="my-5">
    hard skills : JS, TS, Angular, Vue, ... + SOFT SKILLS
  </div>
  <div class="my-5">Projects preview (with links)</div>
  <div class="my-5">Projects preview (without links)</div>
  <!-- <WorkInProgress /> -->
</template>
