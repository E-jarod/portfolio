<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import CvBodyCard from './components/cards/CvBodyCard.vue';
import CvBodyCardTargetContent from './components/cards/contents/CvBodyCardTargetContent.vue';
import CvBodyCardLanguagesContent from './components/cards/contents/CvBodyCardLanguagesContent.vue';
import CvBodyCardHobbiesContent from './components/cards/contents/CvBodyCardHobbiesContent.vue';
import CvBodyCardSkillsContent from './components/cards/contents/CvBodyCardSkillsContent.vue';
import { ProvidedIsEnglish } from './cv.model';

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
  <CvBodyCard :title="titles.target">
    <CvBodyCardTargetContent />
  </CvBodyCard>
  <CvBodyCard is-red :title="titles.skills" height="flex-grow">
    <CvBodyCardSkillsContent />
  </CvBodyCard>
  <CvBodyCard :title="titles.languages">
    <CvBodyCardLanguagesContent />
  </CvBodyCard>
  <CvBodyCard height="h-60vw" :title="titles.hobbies">
    <CvBodyCardHobbiesContent />
  </CvBodyCard>
</template>
