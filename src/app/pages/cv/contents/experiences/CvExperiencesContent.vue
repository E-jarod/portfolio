<script setup lang="ts">
import { inject, ref } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';
import { CV_TIMESPAN_INFOS } from '../cv-timespan.utils';
import CvTimespan from '../CvTimespan.vue';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const timespans = ref(CV_TIMESPAN_INFOS);
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
  >
    <Component :is="timespan.getComponent?.()" />
  </CvTimespan>
</template>
