<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import { ProvidedIsEnglish } from '@pages/cv/cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = reactive({
  becomeExpert: computed(() =>
    isEnglish.value ? 'Become an IT ' : 'Devenir un ',
  ),
  becomeExpertEnding: computed(() =>
    isEnglish.value ? '' : ' informatique',
  ),
  discoverNew: computed(() =>
    isEnglish.value ? 'Discover new ' : 'Découvrir de nouvelles ',
  ),
  itConcepts: computed(() =>
    isEnglish.value ? 'IT concepts' : 'notions informatiques',
  ),
  become: computed(() => (isEnglish.value ? 'Become ' : 'Devenir ')),
  projectManager: computed(() =>
    isEnglish.value ? 'project manager' : 'responsable de projet',
  ),
});
</script>

<template>
  <ul class="leading-7 list-disc pl-12vw sm:pl-6vw text-xlvw">
    <transition name="slide" mode="out-in">
      <li :key="trad.becomeExpert">
        <span v-text="trad.becomeExpert"></span>
        <em class="italic font-bold">expert</em>
        <span v-text="trad.becomeExpertEnding"></span>
      </li>
    </transition>
    <transition name="slide" mode="out-in">
      <li :key="trad.itConcepts">
        <span v-text="trad.discoverNew"></span>
        <em class="italic font-bold" v-text="trad.itConcepts"></em>
      </li>
    </transition>
    <transition name="slide" mode="out-in">
      <li :key="trad.become">
        <span v-text="trad.become"></span>
        <em class="italic font-bold" v-text="trad.projectManager"></em>
      </li>
    </transition>
  </ul>
</template>
