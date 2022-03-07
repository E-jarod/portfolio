<script setup lang="ts">
import { inject, computed, reactive } from 'vue';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import type { ProvidedIsEnglish } from '../../cv.model';
import type { TimespanInfo } from './cv-experiences-contents.utils';
import { timespanContents } from './cv-experiences-contents.utils';
import CvTimespan from './CvTimespan.vue';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const timespans: TimespanInfo[] = [
  reactive({
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C4D0BAQHY65mUGU6apw/company-logo_100_100/0/1575540140277?e=1652918400&v=beta&t=FMQ7yz1OjNOt7eU08vKN2m9Vt922Kwlbtla8OdLL8D8',
    imgAlt: 'Ateliom logo',
    title: computed(() =>
      isEnglish.value
        ? 'Full Stack JS Developer'
        : 'Développeur Full Stack JS',
    ),
    structureName: 'Ateliom',
    locationName: 'Paris',
    locationIcon: ['fas', 'briefcase'] as IconProp,
    structureIcon: ['fas', 'location-dot'] as IconProp,
    badgeText: computed(() =>
      isEnglish.value ? 'Apprenticeship' : 'Alternance',
    ),
    startDate: new Date(2021, 8, 6),
  }),
  reactive({
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C4D0BAQH0QUe8XKf3dA/company-logo_100_100/0/1603971739251?e=1652918400&v=beta&t=k3q8PonRrV18bccJCpeA1gfPA8Gkp_Rfew6i3iTSrfE',
    imgAlt: 'PASS Technologie logo',
    title: computed(() =>
      isEnglish.value
        ? 'Front-end Angular Developer'
        : 'Développeur Front-end Angular',
    ),
    structureName: 'Pass Technologie',
    locationName: 'Paris',
    locationIcon: ['fas', 'briefcase'] as IconProp,
    structureIcon: ['fas', 'location-dot'] as IconProp,
    badgeText: computed(() =>
      isEnglish.value ? 'Apprenticeship' : 'Alternance',
    ),
    startDate: new Date(2019, 7, 14),
    endDate: new Date(2021, 9, 31),
  }),
  reactive({
    imgSrc:
      'https://media-exp2.licdn.com/dms/image/C4D0BAQH94qXpEjr0AQ/company-logo_100_100/0/1632330797331?e=1652918400&v=beta&t=OouaKv3SwJ2zKdvsXB0xuqHbMECPKfYddj8ZFOGK9_M',
    imgAlt: 'DevFamily logo',
    title: computed(() =>
      isEnglish.value
        ? 'Full Stack JS Developer'
        : 'Développeur Full Stack JS',
    ),
    structureName: 'DevFamily',
    locationName: 'Remote',
    locationIcon: ['fas', 'house-laptop'] as IconProp,
    structureIcon: ['fas', 'users'] as IconProp,
    badgeText: computed(() =>
      isEnglish.value ? 'Personal free time' : 'Temps libre personnel',
    ),
    startDate: new Date(2020, 7, 1),
  }),
];
</script>

<template>
  <template v-for="(timespan, index) in timespans" :key="index">
    <hr
      v-if="index === 2"
      class="inline-block border-2 border-slate-100"
    />
    <CvTimespan
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
    >
      <component :is="timespanContents[index]"></component>
    </CvTimespan>
  </template>
</template>
