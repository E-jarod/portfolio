<script setup lang="ts">
import { computed, inject } from 'vue';

import { ProvidedIsEnglish } from '../cv.model';
import {
  getAvalaibleText,
  getRightMonth,
  getMyAge,
} from './cv-header.utils';

const isEnglish = inject('is-english') as ProvidedIsEnglish;
const myAge = getMyAge();

const availableAt = new Date('08/31/2021');
const availableDate = computed(() =>
  getRightMonth(availableAt, isEnglish.value),
);

const available = false;
const availableText = computed(() =>
  available
    ? getAvalaibleText(availableDate.value, isEnglish.value)
    : 'En poste chez Extia depuis le 05/09/2022',
);

const jobTitle = computed(() =>
  isEnglish.value ? ' Developer' : 'Développeur ',
);

const phoneNumber = computed(() =>
  isEnglish.value ? '+33 7 68 45 86 63' : '07 68 45 86 63',
);

const currentAge = computed(() => {
  return isEnglish.value ? `${myAge} years old` : `${myAge} ans`;
});

const copy = async () =>
  await navigator.clipboard.writeText('ejilane.jarod');
</script>

<template>
  <div
    class="flex items-center justify-between space-x-10vw p-6vw bg-sky-100 rounded-3xl h-56vw print:rounded-t-none"
  >
    <img
      width="175"
      height="175"
      class="flex-shrink-0 rounded-3xl h-40vw w-40vw"
      src="/cv_profile_picture.jpeg"
      alt="CV profile picture"
    />
    <div class="flex items-stretch justify-between flex-grow">
      <div class="flex flex-col flex-grow">
        <span class="block font-bold text-blue-900 text-4xlvw"
          >Jarod EJILANE</span
        >
        <transition name="slide" mode="out-in">
          <strong
            :key="jobTitle"
            class="block font-normal transition-all text-slate-900 text-4xlvw"
          >
            <span v-show="!isEnglish" v-text="jobTitle"></span>
            <em class="not-italic font-bold text-red-500">TypeScript</em> &
            <em class="not-italic font-bold text-sky-500">Flutter</em>
            <span v-show="isEnglish" v-text="jobTitle"></span>
          </strong>
        </transition>
        <transition name="slide" mode="out-in">
          <span
            :key="availableText"
            class="block italic text-slate-500 text-xlvw"
            v-text="availableText"
          ></span>
        </transition>
      </div>
      <div class="flex flex-col items-end justify-around flex-shrink-0">
        <span
          class="block font-bold print:cursor-pointer cursor-copy text-slate-600 text-2xlvw"
          @click="copy()"
          >ejilane.jarod<small class="text-mdvw text-slate-500"
            >@gmail.com</small
          ></span
        >
        <transition name="slide" mode="out-in">
          <a
            :key="phoneNumber"
            :href="'tel:' + phoneNumber.split(' ').join('')"
            class="block font-bold cursor-pointer print:cursor-text text-slate-600 text-2xlvw"
            v-text="phoneNumber"
          ></a>
        </transition>
        <!-- TODO: age calculator -->
        <transition name="slide" mode="out-in">
          <span
            :key="currentAge"
            class="block italic print:cursor-pointer cursor-copy text-slate-500 text-xlvw"
            v-text="currentAge"
          ></span>
        </transition>
      </div>
    </div>
  </div>
  <!-- TODO: curve -->
  <!-- <div
      class="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 bg-transparent"
    >
      <svg
        class="relative block w-[calc(131%+1.3px)] h-80vw"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="fill-sky-100"
        ></path>
      </svg>
    </div> -->
</template>

<!-- <style scoped>
/* .wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  svg {
    position: relative;
    display: block;
    width: calc(131% + 1.3px);
    height: 70px;
  }
  .shape-fill {
    fill: #ffffff;
  }
} */
</style> -->
