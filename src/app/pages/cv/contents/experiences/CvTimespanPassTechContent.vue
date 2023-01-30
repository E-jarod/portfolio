<script setup lang="ts">
import { inject, computed, reactive } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = reactive({
  // Promat
  promatPresentation: computed(() =>
    isEnglish.value
      ? 'Desktop application that designs glass partitions for the Promat company, used by salespeople to make an estimate, in order to transmit to clients and manufacturers'
      : 'Application desktop qui concoit des cloisons vitrées pour la société Promat, utilisé par des commerciaux pour faire un devis, afin de transmettre aux clients et constructeurs',
  ),
  promatList: computed(() =>
    isEnglish.value
      ? [
          'project from scratch',
          'Figma mid-fidelity wireframe',
          'form filters management',
        ]
      : [
          'projet from scratch',
          'Figma mid-fidelity wireframe',
          'gestion des filtres de form',
        ],
  ),
  // Correlyce
  correlyceTitle: computed(() =>
    isEnglish.value
      ? 'Redesign of the Correlyce Atrium Sud website'
      : 'Refonte du site web de Correlyce Atrium Sud',
  ),
  correlycePresentation: computed(() =>
    isEnglish.value
      ? 'Web and mobile app offering educational resources to public establishments in the PACA région'
      : 'App web et mobile offrant des ressources pédagogique aux établissements public de la région PACA',
  ),
  correlyceList: computed(() =>
    isEnglish.value
      ? [
          'web & mobile app',
          'UI redisign',
          'digital textbook catalogs',
          'global state management with NgRx',
          'UI design integration given by customers',
          'propal of UI choices',
          'in charge of UI/UX',
          'clean components',
        ]
      : [
          'app web & mobile',
          "refonte de l'UI",
          'catalogues de manuels numériques',
          'Gestion du state global via NgRx',
          'integration de charte graphique donné par les clients',
          'responable UI/UX',
          'clean components',
        ],
  ),
});
</script>

<template>
  <div class="flex flex-col items-start justify-between space-y-2">
    <div class="flex items-center justify-between w-full">
      <h6 class="w-2/5 font-bold text-red-600 uppercase">
        Promat Cloisons Vitrés
      </h6>
      <Transition name="slide" mode="out-in">
        <p
          :key="trad.promatPresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.promatPresentation"
        ></p>
      </Transition>
    </div>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.promatList[0]" class="flex flex-wrap gap-2">
        <li
          v-for="(item, index) in trad.promatList"
          class="inline-flex p-1 px-2 font-bold rounded text-smvw text-sky-600 bg-sky-100"
          :key="index"
          v-text="item"
        ></li>
      </ul>
    </Transition>
  </div>
  <div class="flex flex-col items-start justify-between space-y-2">
    <div class="flex items-center justify-between w-full">
      <Transition name="slide" mode="out-in">
        <h6
          :key="trad.correlyceTitle"
          class="font-bold text-red-600 uppercase"
          v-text="trad.correlyceTitle"
        ></h6>
      </Transition>
      <Transition name="slide" mode="out-in">
        <p
          :key="trad.correlycePresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.correlycePresentation"
        ></p>
      </Transition>
    </div>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.correlyceList[0]" class="flex flex-wrap gap-2">
        <li
          v-for="(item, index) in trad.correlyceList"
          class="inline-flex p-1 px-2 font-bold rounded text-smvw text-sky-600 bg-sky-100"
          :key="index"
          v-text="item"
        ></li>
      </ul>
    </Transition>
  </div>
</template>
