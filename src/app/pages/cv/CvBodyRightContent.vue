<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import CvBodyCard from './components/cards/CvBodyCard.vue';
import { ProvidedIsEnglish } from './cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const titles = reactive({
  experiences: computed(() =>
    isEnglish.value ? 'Experiences' : 'Expériences',
  ),
  school: computed(() => (isEnglish.value ? 'Background' : 'Formations')),
});
</script>

<template>
  <CvBodyCard :title="titles.experiences" class="flex-grow h-auto" />
  <CvBodyCard :title="titles.school" class="flex-grow h-auto" />
</template>
