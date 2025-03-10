<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = reactive({
  // DOSIMA
  myArvalPresentation: computed(() =>
    isEnglish.value
      ? '2022 European leading web app for vehicles leasing'
      : 'App web leader européen 2022 de leasing de véhicules',
  ),
  myArvalList: computed(() =>
    isEnglish.value
      ? [
          'angular 12->16',
          'java spring',
          'front-end development',
          'NGXS state management',
          'unit tests',
          'CMS translations for each country',
          'backoffice for display settings',
        ]
      : [
          'angular 12->16',
          'java spring',
          'développement front-end',
          'state management NGXS',
          'tests unitaires',
          'traductions CMS de chaque pays',
          "backoffice pour paramètres d'affichage",
        ],
  ),
});
</script>

<template>
  <div class="flex flex-col items-start justify-between space-y-2">
    <div class="flex items-center justify-between w-full">
      <h6 class="font-bold text-red-600 uppercase">My Arval</h6>
      <Transition name="slide" mode="out-in">
        <p
          :key="trad.myArvalPresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.myArvalPresentation"
        ></p>
      </Transition>
    </div>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.myArvalList[0]" class="flex flex-wrap gap-2">
        <li
          v-for="(item, index) in trad.myArvalList"
          :key="index"
          class="inline-flex p-1 px-2 font-bold rounded text-smvw text-sky-600 bg-sky-100"
          v-text="item"
        ></li>
      </ul>
    </Transition>
  </div>
</template>
