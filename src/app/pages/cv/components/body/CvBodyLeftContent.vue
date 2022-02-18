<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import CvBodyCard from '../cards/CvBodyCard.vue';
import CvTargetsContent from '../contents/targets/CvTargetsContent.vue';
import CvLanguagesContent from '../contents/languages/CvLanguagesContent.vue';
import CvHobbiesContent from '../contents/hobbies/CvHobbiesContent.vue';
import CvSkillsContent from '../contents/skills/CvSkillsContent.vue';
import { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

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
  <CvBodyCard height="h-56vw" :title="titles.target">
    <CvTargetsContent />
  </CvBodyCard>
  <CvBodyCard is-red :title="titles.skills" height="flex-grow">
    <CvSkillsContent />
  </CvBodyCard>
  <CvBodyCard :title="titles.languages">
    <CvLanguagesContent />
  </CvBodyCard>
  <CvBodyCard height="h-60vw" :title="titles.hobbies">
    <CvHobbiesContent />
  </CvBodyCard>
</template>
