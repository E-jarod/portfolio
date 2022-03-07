<script setup lang="ts">
import { inject, computed, reactive } from 'vue';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import type { ProvidedIsEnglish } from '../../cv.model';
import type { TimespanInfo } from '../cv-timespan.utils';
import CvTimespan from '../CvTimespan.vue';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const timespans: TimespanInfo[] = [
  reactive({
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C4D0BAQHIpIhUq6mVyw/company-logo_100_100/0/1519898530333?e=1652918400&v=beta&t=WSjt9efKWxPzjZKYlgBiIT85NL46XUSP_5eisTu3bZM',
    imgAlt: 'CFA INSTA logo',
    title: computed(() =>
      isEnglish.value
        ? 'Application Designer Developer'
        : "Concepteur Développeur d'Applications",
    ),
    structureName: 'CFA INSTA',
    locationName: 'Paris',
    structureIcon: ['fas', 'graduation-cap'] as IconProp,
    locationIcon: ['fas', 'location-dot'] as IconProp,
    badgeText: 'RNCP VI',
    startDate: new Date(2021, 8, 20),
  }),
  reactive({
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C4D0BAQHIpIhUq6mVyw/company-logo_100_100/0/1519898530333?e=1652918400&v=beta&t=WSjt9efKWxPzjZKYlgBiIT85NL46XUSP_5eisTu3bZM',
    imgAlt: 'CFA INSTA logo',
    title: computed(() =>
      isEnglish.value
        ? 'BTS SIO | Software Solutions and Business Applications option'
        : 'BTS SIO | option Solutions Logicielles et Applications Métier',
    ),
    structureName: 'CFA INSTA',
    locationName: 'Paris',
    structureIcon: ['fas', 'graduation-cap'] as IconProp,
    locationIcon: ['fas', 'location-dot'] as IconProp,
    startDate: new Date(2019, 8, 10),
    endDate: new Date(2021, 6, 15),
  }),
  reactive({
    imgSrc:
      'https://lycee-jeanrostand.fr/wp-content/uploads/2021/11/lyc%C3%A9e-j-rostand-logo3-miniature.png',
    imgAlt: 'Lycée Jean Rostand logo',
    title: computed(() =>
      isEnglish.value
        ? 'Bac S | Engineering Sciences option | IT and Digital Sciences specialty'
        : "Bac S | option Sciences de l'Ingénieur | spécialité Informatique et Sciences du Numérique",
    ),
    structureName: 'Lycée Jean Rostand',
    locationName: 'Villepinte',
    structureIcon: ['fas', 'graduation-cap'] as IconProp,
    locationIcon: ['fas', 'location-dot'] as IconProp,
    startDate: new Date(2018, 8, 3),
    endDate: new Date(2019, 6, 5),
  }),
];
</script>

<template>
  <CvTimespan
    v-for="(timespan, index) in timespans"
    :key="index"
    :img-src="timespan.imgSrc"
    :img-alt="timespan.imgAlt"
    :title="timespan.title"
    :structure-name="timespan.structureName"
    :location-name="timespan.locationName"
    :badge-text="timespan.badgeText"
    :structure-icon="timespan.structureIcon"
    :location-icon="timespan.locationIcon"
    :start-date="timespan.startDate"
    :end-date="timespan.endDate"
  />
</template>
