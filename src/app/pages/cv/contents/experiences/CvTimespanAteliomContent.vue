<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = reactive({
  // DOSIMA
  dosimaPresentation: computed(() =>
    isEnglish.value
      ? 'Web app for verifying the nuclear exposure rate'
      : "App web de vérification du taux d'exposition nucléaire",
  ),
  dosimaList: computed(() =>
    isEnglish.value
      ? [
          'vue 3',
          'quasar.js',
          'nest.js',
          'postgresql',
          'front-end scaffold',
          'backend scaffold',
          'database scaffold',
          'autonomus web dev (2-3 months)',
          'teamwork web dev (7-8 months)',
          'configuration files',
          'project architecture',
          'administration pages',
        ]
      : [
          'vue 3',
          'quasar.js',
          'nest.js',
          'postgresql',
          'scaffold front-end',
          'scaffold back-end',
          'scaffold base de données',
          'dev web autonome (2-3 mois)',
          'dev web en team (7-8 mois)',
          'fichiers de config',
          'architecture de projet',
          "pages d'administration",
        ],
  ),
  // Boilerplate
  // boilerplateTitle: computed(() =>
  //   isEnglish.value
  //     ? 'Quasar.js & Nest.js Boilerplate'
  //     : 'Boilerplate Quasar.js & Nest.js',
  // ),
  // boilerplatePresentation: computed(() =>
  //   isEnglish.value
  //     ? 'Front-end & back-end boilerplates'
  //     : 'Boilerplate front-end & back-end',
  // ),
});
</script>

<template>
  <div class="flex flex-col items-start justify-between space-y-2">
    <div class="flex items-center justify-between w-full">
      <h6 class="font-bold text-red-600 uppercase">DOSIMA</h6>
      <Transition name="slide" mode="out-in">
        <p
          :key="trad.dosimaPresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.dosimaPresentation"
        ></p>
      </Transition>
    </div>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.dosimaList[0]" class="flex flex-wrap gap-2">
        <li
          v-for="(item, index) in trad.dosimaList"
          :key="index"
          class="inline-flex p-1 px-2 font-bold rounded text-smvw text-sky-600 bg-sky-100"
          v-text="item"
        ></li>
      </ul>
    </Transition>
  </div>
  <!-- <div class="flex flex-col items-start justify-between">
    <div class="flex items-center justify-between w-full">
      <Transition name="slide" mode="out-in">
        <h6
          :key="trad.boilerplateTitle"
          class="font-bold text-red-600 uppercase"
          v-text="trad.boilerplateTitle"
        ></h6>
      </Transition>
      <Transition name="slide" mode="out-in">
        <p
          :key="trad.boilerplatePresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.boilerplatePresentation"
        ></p>
      </Transition>
    </div>
  </div> -->
</template>
