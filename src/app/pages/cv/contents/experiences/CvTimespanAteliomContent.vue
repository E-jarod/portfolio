<script setup lang="ts">
import { inject, computed, reactive } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = reactive({
  // DOSIMA
  dosimaPresentation: computed(() =>
    isEnglish.value
      ? 'Web app for verifying the nuclear exposure rate of IRSN employees'
      : "App web de vérification du taux d'exposition nucléaire des employers de l'IRSN",
  ),
  dosimaListScaffold: computed(() =>
    isEnglish.value
      ? 'Scaffold front-end, back-end and database'
      : 'Scaffold front-end, back-end et base de données',
  ),
  dosimaListAutonomy: computed(() =>
    isEnglish.value
      ? '2-3 months of development alone on the fullstack web part, then teamwork of around 6-7 developers'
      : "2-3 mois de développement seul sur la partie fullstack web, puis travail en équipe d'environ 6-7 développeurs",
  ),
  dosimaListProgress: computed(() =>
    isEnglish.value
      ? 'Setting up all the tables, endpoints and services in the back-end + admin pages and a few pages in the front-end'
      : 'Mise en place de toutes les tables, endpoints et services dans le back + pages admins et quelques pages dans le front',
  ),
  dosimaListConfig: computed(() =>
    isEnglish.value
      ? 'Configuring linters, formatters and TypeScript'
      : 'Configuration des linteur, formatteur et TypeScript',
  ),
});
</script>

<template>
  <div>
    <h6 class="font-bold text-red-600 uppercase">DOSIMA</h6>
    <Transition name="slide" mode="out-in">
      <p
        :key="trad.dosimaPresentation"
        class="italic text-slate-500"
        v-text="trad.dosimaPresentation"
      ></p>
    </Transition>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.dosimaListScaffold" class="list-disc pl-5vw">
        <li v-text="trad.dosimaListScaffold"></li>
        <li v-text="trad.dosimaListAutonomy"></li>
        <li v-text="trad.dosimaListProgress"></li>
        <li v-text="trad.dosimaListConfig"></li>
      </ul>
    </Transition>
  </div>
  <div>
    <h6 class="font-bold text-red-600 uppercase">
      Boilerplate Quasar.js & Nest.js
    </h6>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.dosimaListScaffold" class="list-disc pl-5vw">
        <li v-text="trad.dosimaListScaffold"></li>
        <li v-text="trad.dosimaListProgress"></li>
        <li v-text="trad.dosimaListConfig"></li>
      </ul>
    </Transition>
  </div>
</template>
