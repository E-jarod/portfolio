<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import CvBodyCard from '../components/cards/CvBodyCard.vue';
import CvBackgroundContent from '../contents/background/CvBackgroundContent.vue';
import CvExperiencesContent from '../contents/experiences/CvExperiencesContent.vue';
import type { ProvidedIsEnglish } from '../cv.model';

const isEnglish: ProvidedIsEnglish = inject('is-english')!;

const titles = reactive({
  experiences: computed(() =>
    isEnglish.value ? 'Experiences' : 'Expériences',
  ),
  school: computed(() => (isEnglish.value ? 'Background' : 'Formations')),
});
</script>

<template>
  <CvBodyCard
    :title="titles.experiences"
    height="flex-grow"
    text-size="text-lgvw print:text-xlvw"
    additional-content-classes="justify-around"
  >
    <CvExperiencesContent />
  </CvBodyCard>

  <CvBodyCard
    :title="titles.school"
    height="h-96vw"
    text-size="text-lgvw print:text-xlvw"
    additional-content-classes="justify-between"
  >
    <CvBackgroundContent />
  </CvBodyCard>
</template>
