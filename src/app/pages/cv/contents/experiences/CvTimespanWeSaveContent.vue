<script setup lang="ts">
import { computed, inject } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = computed(() =>
  isEnglish.value
    ? {
        applicationName: 'LCL TPBP application',
        applicationPresentation:
          'Financial and real estate patrimony management app, for advisors and self-care users',
        applicationTags: [
          'JSON API (REST API superset)',
          'Vue 2/3',
          'ruby on rails',
          'unit tests',
          'non regressions tests',
          'e2e tests',
          'Domain Driven Design',
          'clean architecture',
          'docker',
          'state management',
          'TailwindCSS',
          'legacy management',
          'Design System',
        ],
      }
    : {
        applicationName: 'Application TPBP de LCL',
        applicationPresentation:
          'Application de gestion de patrimoine immobilière et financière, pour des conseillers et utilisateurs self-care',
        applicationTags: [
          'JSON API (superset des API REST)',
          'Vue 2/3',
          'ruby on rails',
          'tests unitaires',
          'tests de non regressions',
          'tests e2e',
          'Domain Driven Design',
          'clean architecture',
          'state management',
          'TailwindCSS',
          'legacy management',
          'Design System',
        ],
      },
);
</script>

<template>
  <div class="flex flex-col items-start justify-between space-y-2">
    <div class="flex items-center justify-between w-full gap-40vw">
      <Transition name="slide" mode="out-in">
        <h6
          :key="trad.applicationName"
          class="font-bold text-red-600 uppercase"
          v-text="trad.applicationName"
        ></h6>
      </Transition>

      <Transition name="slide" mode="out-in">
        <p
          :key="trad.applicationPresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.applicationPresentation"
        ></p>
      </Transition>
    </div>

    <Transition name="slide" mode="out-in">
      <ul
        :key="trad.applicationTags[0]"
        class="flex flex-wrap gap-2 lowercase"
      >
        <li
          v-for="(item, index) in trad.applicationTags"
          :key="index"
          class="inline-flex p-1 px-2 font-bold rounded text-smvw text-sky-600 bg-sky-100"
          v-text="item"
        ></li>
      </ul>
    </Transition>
  </div>
</template>
