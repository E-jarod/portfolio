<script setup lang="ts">
import CvSkill from './CvSkill.vue';
import { skills } from './cv-skils.utils';
</script>

<template>
  <ul
    class="flex flex-col justify-between h-full list-none text-xlvw px-4vw"
  >
    <CvSkill
      v-for="(skill, index) in skills"
      :key="index"
      :is-svg="skill.isSvg"
      :separator="skill.separator"
      :is-confirmed-skill="skill.isConfirmedSkill"
      :skill-name="skill.skillName"
      :padding="skill.padding"
      :bg-color="skill.bgColor"
      :fa-icon="skill.faIcon"
      :svg-icon="skill.svgIcon"
    />
  </ul>
</template>
