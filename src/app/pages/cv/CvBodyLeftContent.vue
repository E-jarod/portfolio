<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import CvBodyCard from './components/cards/CvBodyCard.vue';
import CvBodyCardTargetContent from './components/cards/contents/CvBodyCardTargetContent.vue';
import CvBodyCardLanguagesContent from './components/cards/contents/CvBodyCardLanguagesContent.vue';
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
  <CvBodyCard class="h-56vw" :title="titles.target">
    <CvBodyCardTargetContent />
  </CvBodyCard>
  <CvBodyCard is-red :title="titles.skills" class="flex-grow h-auto" />
  <CvBodyCard class="h-56vw" :title="titles.languages">
    <CvBodyCardLanguagesContent />
  </CvBodyCard>
  <CvBodyCard class="h-56vw" :title="titles.hobbies" />
</template>
