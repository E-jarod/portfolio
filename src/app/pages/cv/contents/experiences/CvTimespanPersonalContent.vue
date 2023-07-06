<script setup lang="ts">
import { inject, computed, reactive } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = reactive({
  titlePart: computed(() =>
    isEnglish.value
      ? "DoctoAssistance's full-stack applications"
      : 'applications full-stack de DoctoAssistance',
  ),
  devFamilyPresentation: computed(() =>
    isEnglish.value
      ? 'Medical call center monitoring patients, in order to intervene in case of emergency'
      : "Centre d'appel médical monitorant des patients, afin d'intervenir en cas d'urgence",
  ),
  devFamilyList: computed(() =>
    isEnglish.value
      ? [
          'unit tests (Vitest)',
          'Domain Driven Design',
          'Clean architecture',
          'Withings web service',
          'api REST',
          'Docker',
          'prisma orm',
          'postegresql',
          'nest',
          'fastify',
          'Vue 3',
          'chart.js',
          'state management (Pinia)',
          'TailwindCSS',
          'front, back, database from scratch',
        ]
      : [
          'tests unitaires (vitest)',
          'domain driven design',
          'clean architecture',
          'Withings webservice',
          'api REST',
          'docker',
          'prisma orm',
          'postegresql',
          'nest',
          'fastify',
          'Vue 3',
          'chart.js',
          'state management (Pinia)',
          'TailwindCSS',
          'front, back, bdd from scratch',
        ],
  ),
});
</script>

<template>
  <div class="flex flex-col items-start justify-between space-y-2">
    <div class="flex items-center justify-between w-full">
      <Transition name="slide" mode="out-in">
        <h6
          :key="trad.titlePart"
          class="font-bold text-red-600 uppercase"
          v-text="trad.titlePart"
        ></h6>
      </Transition>
      <Transition name="slide" mode="out-in">
        <p
          :key="trad.devFamilyPresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.devFamilyPresentation"
        ></p>
      </Transition>
    </div>
    <Transition name="slide" mode="out-in">
      <ul
        :key="trad.devFamilyList[0]"
        class="flex flex-wrap gap-2 lowercase"
      >
        <li
          v-for="(item, index) in trad.devFamilyList"
          class="inline-flex p-1 px-2 font-bold rounded text-smvw text-sky-600 bg-sky-100"
          :key="index"
          v-text="item"
        ></li>
      </ul>
    </Transition>
  </div>
</template>
