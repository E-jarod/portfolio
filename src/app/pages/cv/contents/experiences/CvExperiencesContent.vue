<script setup lang="ts">
import { inject, computed, reactive } from 'vue';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import type { ProvidedIsEnglish } from '../../cv.model';
import type { TimespanInfo } from '../cv-timespan.utils';
import { timespanContents } from './cv-experiences-contents.utils';
import CvTimespan from '../CvTimespan.vue';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const timespans: TimespanInfo[] = [
  reactive({
    imgSrc: '/arval_logo.jpeg',
    imgAlt: 'Arval logo',
    title: computed(() =>
      isEnglish.value
        ? "Angular Developer | Extia's Consultant"
        : 'Développeur Angular | Consultant chez Extia',
    ),
    structureName: 'Arval',
    locationName: 'Rueil-Malmaison',
    locationIcon: ['fas', 'location-dot'] as IconProp,
    structureIcon: ['fas', 'briefcase'] as IconProp,
    badgeText: computed(() => (isEnglish.value ? 'Full time' : 'CDI')),
    startDate: new Date(2022, 8, 5),
  }),
  reactive({
    imgSrc: '/improba_logo.jpeg',
    imgAlt: 'Improba logo',
    title: computed(() =>
      isEnglish.value
        ? 'Full Stack JS Developer'
        : 'Développeur Full Stack JS',
    ),
    structureName: 'Improba',
    locationName: 'Paris',
    locationIcon: ['fas', 'location-dot'] as IconProp,
    structureIcon: ['fas', 'briefcase'] as IconProp,
    badgeText: computed(() =>
      isEnglish.value ? 'Apprenticeship' : 'Alternance',
    ),
    startDate: new Date(2021, 8, 6),
    endDate: new Date(2022, 7, 31),
  }),
  reactive({
    imgSrc: '/pass_technologie_logo.jpeg',
    imgAlt: 'PASS Technologie logo',
    title: computed(() =>
      isEnglish.value
        ? 'Front-end Angular Developer'
        : 'Développeur Front-end Angular',
    ),
    structureName: 'Pass Technologie',
    locationName: 'Paris',
    locationIcon: ['fas', 'location-dot'] as IconProp,
    structureIcon: ['fas', 'briefcase'] as IconProp,
    badgeText: computed(() =>
      isEnglish.value ? 'Apprenticeship' : 'Alternance',
    ),
    startDate: new Date(2019, 7, 14),
    endDate: new Date(2021, 9, 31),
  }),
  reactive({
    imgSrc: '/devfamily_logo.jpeg',
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
      v-if="index === 3"
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
