<script setup lang="ts">
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { computed, inject } from 'vue';

import { ProvidedIsEnglish } from '../cv.model';

export interface CvTimespanProps {
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

const ongoingBadgeText = computed(() =>
  isEnglish.value ? 'Ongoing' : 'En cours',
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
          <transition name="slide" mode="out-in">
            <span
              :key="title"
              class="font-bold space-x-1vw text-slate-900 text-xlvw"
            >
              <span>{{ title }}</span>
              <small
                v-if="endDate === '?'"
                :key="ongoingBadgeText"
                class="font-bold text-smvw bg-sky-100 rounded-3xl px-3vw py-1vw"
                v-text="ongoingBadgeText"
              ></small>
            </span>
          </transition>
          <transition name="slide" mode="out-in">
            <span
              :key="badgeText"
              v-if="badgeText"
              class="font-bold bg-red-100 rounded-3xl px-3vw py-1vw"
              v-text="badgeText"
            ></span>
          </transition>
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
            <transition name="slide" mode="out-in">
              <span :key="locationName" v-text="locationName"></span>
            </transition>
          </span>
          <transition name="slide" mode="out-in">
            <span
              :key="startDate"
              class="flex-grow text-right space-x-3vw"
            >
              <fa-icon :icon="['fas', 'calendar-days']"></fa-icon>
              <span>{{ startDate }} - {{ endDate }}</span>
            </span>
          </transition>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>
