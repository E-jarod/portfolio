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
  promatListFromScratch: computed(() =>
    isEnglish.value
      ? 'Planning / Modeling from scratch'
      : 'Planification / Modélisation from scratch',
  ),
  promatListUiDesign: computed(() =>
    isEnglish.value
      ? 'UI design on Figma, validated by customers'
      : "Design de l'UI sur Figma, validé par les clients",
  ),
  promatListUiImplementation: computed(() =>
    isEnglish.value
      ? 'Mockup-based UI implementation'
      : "Implémentation de l'UI basé sur les maquettes",
  ),
  promatListFilters: computed(() =>
    isEnglish.value
      ? 'Main work on filters'
      : 'Travail principal sur les filtres',
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
  correlyceGivenDesign: computed(() =>
    isEnglish.value
      ? 'Compliance with the graphic charter given by the customer'
      : 'Respect de la charte graphique donné par le client',
  ),
  correlyceNgRx: computed(() =>
    isEnglish.value
      ? 'Global state management using NgRx'
      : 'Gestion du state global via NgRx',
  ),
  correlyceNewIdeas: computed(() =>
    isEnglish.value
      ? 'Proposal of new design ideas'
      : 'Proposition de nouvelles idées de design',
  ),
  correlyceRefactor: computed(() =>
    isEnglish.value
      ? 'Optimised refactoring of Angular components'
      : 'Refactoring des composants Angular de manière optimisé',
  ),
});
</script>

<template>
  <div>
    <h6 class="font-bold text-red-600 uppercase">
      Promat Cloisons Vitrés
    </h6>
    <Transition name="slide" mode="out-in">
      <p
        :key="trad.promatPresentation"
        class="italic text-slate-500"
        v-text="trad.promatPresentation"
      ></p>
    </Transition>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.promatListFromScratch" class="list-disc pl-5vw">
        <li v-text="trad.promatListFromScratch"></li>
        <li v-text="trad.promatListUiDesign"></li>
        <li v-text="trad.promatListUiImplementation"></li>
        <li v-text="trad.promatListFilters"></li>
      </ul>
    </Transition>
  </div>
  <div>
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
        class="italic text-slate-500"
        v-text="trad.correlycePresentation"
      ></p>
    </Transition>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.correlyceGivenDesign" class="list-disc pl-5vw">
        <li v-text="trad.correlyceGivenDesign"></li>
        <li v-text="trad.correlyceNgRx"></li>
        <li v-text="trad.correlyceNewIdeas"></li>
        <li v-text="trad.correlyceRefactor"></li>
      </ul>
    </Transition>
  </div>
</template>
