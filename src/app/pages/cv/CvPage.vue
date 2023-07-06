<script setup lang="ts">
import { provide, readonly, ref } from 'vue';

import CvViewBox from './CvViewBox.vue';

const openCv = ref(false);
const isEnglish = ref(false);

const print = (): void => window.print();

const toggleView = (): void => {
  openCv.value = !openCv.value;
};

const switchLanguage = (): void => {
  isEnglish.value = !isEnglish.value;
};

provide('open-cv', readonly(openCv));
provide('is-english', readonly(isEnglish));
</script>

<template>
  <div
    class="flex flex-row-reverse justify-center my-6 space-x-6 text-sm md:justify-between sm:space-x-10 sm:mt-10 print:hidden"
  >
    <button
      type="button"
      class="flex items-center justify-center w-40 h-12 px-0 text-lg font-bold text-white uppercase sm:w-48 md:w-60 sm:px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-white dark:focus:ring-offset-slate-900"
      :class="{
        'bg-red-500 hover:bg-red-500/90 focus:ring-red-500': openCv,
        'bg-red-500/80 hover:bg-red-500 dark:hover:bg-red-500 focus:ring-red-500 dark:bg-red-500/80 dark:focus:ring-red-500':
          !openCv,
      }"
      @click="openCv ? print() : toggleView()"
      v-text="openCv ? 'Print CV' : 'Load CV'"
    ></button>

    <button
      type="button"
      class="relative flex justify-center px-6 bg-opacity-40 rounded-3xl bg-slate-600"
      :class="{ hidden: !openCv }"
      @click="switchLanguage()"
    >
      <img
        width="48"
        height="48"
        class="w-12 h-12 transition-all ease-in-out rounded-full"
        :class="{
          'absolute -z-10 w-9 h-9 -top-1 -right-1 animate-pulse':
            !isEnglish,
        }"
        src="/usa.svg"
        alt="EN"
      />
      <img
        width="48"
        height="48"
        class="w-12 h-12 transition-all ease-in-out rounded-full"
        :class="{
          'absolute -z-10 w-9 h-9 -top-1 -right-1 animate-pulse':
            isEnglish,
        }"
        src="/france.svg"
        alt="FR"
      />
    </button>
  </div>

  <CvViewBox />
</template>
