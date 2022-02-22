<script setup lang="ts">
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { computed, inject } from 'vue';

import { ProvidedIsEnglish } from '../../cv.model';

interface CvTimespanProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  structureIcon: IconProp;
  structureName: string;
  locationIcon: IconProp;
  locationName: string;
  startDate: Date;
  endDate?: Date;
  badgeText?: string;
}

const props = defineProps<CvTimespanProps>();

const isEnglish = inject('is-english') as ProvidedIsEnglish;
const locale = computed(() => (isEnglish.value ? 'en-US' : 'fr'));

const startDate = computed(
  () =>
    `${props.startDate
      .toLocaleString(locale.value, { month: 'short' })
      .toLowerCase()} ${props.startDate.getFullYear()}`,
);

const endDate = computed(() =>
  props.endDate
    ? `${props.endDate
        .toLocaleString(locale.value, { month: 'short' })
        .toLowerCase()} ${props.endDate.getFullYear()}`
    : '?',
);
</script>

<template>
  <section class="flex items-start justify-between">
    <img
      width="70"
      height="70"
      :src="imgSrc"
      :alt="imgAlt"
      class="flex-shrink-0 object-cover border-2 rounded-lg shadow-md ml-5vw mx-6vw border-slate-100 w-16vw h-16vw"
    />
    <div class="flex flex-col flex-grow space-y-6vw">
      <div class="flex flex-col space-y-2vw">
        <div class="flex justify-between">
          <span class="font-bold text-slate-900 text-xlvw">
            {{ title }}
            <small
              v-if="endDate === '?'"
              class="font-bold text-smvw bg-sky-100 rounded-3xl px-3vw py-1vw"
              v-text="'En cours'"
            ></small>
          </span>
          <span
            v-if="badgeText"
            class="font-bold bg-red-100 rounded-3xl px-3vw py-1vw"
            v-text="badgeText"
          ></span>
        </div>
        <div
          class="flex justify-between font-bold space-x-6vw text-slate-400"
        >
          <span class="inline-flex items-center space-x-3vw">
            <fa-icon :icon="structureIcon"></fa-icon>
            <span v-text="structureName"></span>
          </span>
          <span class="inline-flex items-center space-x-3vw">
            <fa-icon :icon="locationIcon"></fa-icon>
            <span v-text="locationName"></span>
          </span>
          <span class="flex-grow text-right space-x-3vw">
            <fa-icon :icon="['fas', 'calendar-days']"></fa-icon>
            <span>{{ startDate }} - {{ endDate }}</span>
          </span>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>
