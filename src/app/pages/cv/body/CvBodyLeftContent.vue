<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import CvBodyCard from '../components/cards/CvBodyCard.vue';
import CvLanguagesContent from '../contents/languages/CvLanguagesContent.vue';
import CvSkillsContent from '../contents/skills/CvSkillsContent.vue';
import type { ProvidedIsEnglish } from '../cv.model';
// import CvHobbiesContent from '../contents/hobbies/CvHobbiesContent.vue';
// import CvTargetsContent from '../contents/targets/CvTargetsContent.vue';

const isEnglish: ProvidedIsEnglish = inject('is-english')!;

const titles = reactive({
  target: computed(() => (isEnglish.value ? 'Targets' : 'Objectifs')),
  skills: computed(() => (isEnglish.value ? 'Skills' : 'Compétences')),
  languages: computed(() => (isEnglish.value ? 'Languages' : 'Langues')),
  hobbies: computed(() =>
    isEnglish.value ? 'Hobbies' : "Centres d'intérêt",
  ),
});
</script>

<template>
  <!-- <CvBodyCard height="h-56vw" :title="titles.target">
    <CvTargetsContent />
  </CvBodyCard> -->
  <CvBodyCard is-red :title="titles.skills" height="flex-grow">
    <CvSkillsContent />
  </CvBodyCard>
  <CvBodyCard :title="titles.languages">
    <CvLanguagesContent />
  </CvBodyCard>
  <!-- <CvBodyCard height="h-60vw" :title="titles.hobbies">
    <CvHobbiesContent />
  </CvBodyCard> -->
</template>
