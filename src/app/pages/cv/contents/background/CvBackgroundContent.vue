<script setup lang="ts">
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { inject, ref } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';
import type { TimespanInfo } from '../cv-timespan.utils';
import CvTimespan from '../CvTimespan.vue';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const timespans = ref<TimespanInfo[]>([
  {
    imgSrc: '/cfa_insta_logo.jpeg',
    imgAlt: 'CFA INSTA logo',
    computeTitle: (isEnglish) =>
      isEnglish
        ? 'Application Designer Developer'
        : "Concepteur Développeur d'Applications",
    structureName: 'CFA INSTA',
    locationName: 'Paris',
    structureIcon: ['fas', 'graduation-cap'] as IconProp,
    locationIcon: ['fas', 'location-dot'] as IconProp,
    computeBadgeText: () => 'RNCP VI',
    startDate: new Date(2021, 8, 20),
    endDate: new Date(2022, 7, 31),
  },
  {
    imgSrc: '/cfa_insta_logo.jpeg',
    imgAlt: 'CFA INSTA logo',
    computeTitle: (isEnglish) =>
      isEnglish
        ? 'BTS SIO | Software Solutions and Business Applications option'
        : 'BTS SIO | option Solutions Logicielles et Applications Métier',
    structureName: 'CFA INSTA',
    locationName: 'Paris',
    structureIcon: ['fas', 'graduation-cap'] as IconProp,
    locationIcon: ['fas', 'location-dot'] as IconProp,
    startDate: new Date(2019, 8, 10),
    endDate: new Date(2021, 6, 15),
  },
  {
    imgSrc: '/lycee_jean_rostand_logo.jpg',
    imgAlt: 'Lycée Jean Rostand logo',
    computeTitle: (isEnglish) =>
      isEnglish
        ? 'Bac S | Engineering Sciences option | IT and Digital Sciences specialty'
        : "Bac S | option Sciences de l'Ingénieur | spécialité Informatique et Sciences du Numérique",
    structureName: 'Lycée Jean Rostand',
    locationName: 'Villepinte',
    structureIcon: ['fas', 'graduation-cap'] as IconProp,
    locationIcon: ['fas', 'location-dot'] as IconProp,
    startDate: new Date(2018, 8, 3),
    endDate: new Date(2019, 6, 5),
  },
]);
</script>

<template>
  <CvTimespan
    v-for="(timespan, index) in timespans"
    :key="index"
    :img-src="timespan.imgSrc"
    :img-alt="timespan.imgAlt"
    :title="timespan.computeTitle(isEnglish)"
    :structure-name="timespan.structureName"
    :location-name="timespan.locationName"
    :badge-text="timespan.computeBadgeText?.(isEnglish)"
    :structure-icon="timespan.structureIcon"
    :location-icon="timespan.locationIcon"
    :start-date="timespan.startDate"
    :end-date="timespan.endDate"
  />
</template>
