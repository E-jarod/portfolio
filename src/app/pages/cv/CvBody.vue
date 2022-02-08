<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import CvBodyCardVue from './CvBodyCard.vue';
import { ProvidedIsEnglish } from './cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const titles = reactive({
  target: computed(() => (isEnglish.value ? 'Targets' : 'Objectifs')),
  skills: computed(() => (isEnglish.value ? 'Skills' : 'Compétences')),
  languages: computed(() => (isEnglish.value ? 'Languages' : 'Langues')),
  experiences: computed(() =>
    isEnglish.value ? 'Experiences' : 'Expériences',
  ),
  school: computed(() => (isEnglish.value ? 'Background' : 'Formations')),
  hobbies: computed(() =>
    isEnglish.value ? 'Hobbies' : "Centres d'intérêt",
  ),
});
</script>

<template>
  <div class="flex flex-grow p-5vw space-x-5vw">
    <div class="flex flex-col w-1/3 h-full rounded-3xl space-y-5vw">
      <CvBodyCardVue :title="titles.target" />
      <CvBodyCardVue
        is-red
        :title="titles.skills"
        class="flex-grow h-auto bg-red-100"
      />
      <CvBodyCardVue :title="titles.languages" />
      <CvBodyCardVue :title="titles.hobbies" />
    </div>
    <div class="flex flex-col w-2/3 h-full rounded-3xl space-y-5vw">
      <CvBodyCardVue
        :title="titles.experiences"
        class="flex-grow h-auto"
      />
      <CvBodyCardVue :title="titles.school" class="flex-grow h-auto" />
    </div>
  </div>
</template>
