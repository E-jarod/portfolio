<script setup lang="ts">
import { reactive } from 'vue';

import CvViewBox from './CvViewBox.vue';

const state = reactive({
  openCv: true,
});

const print = (): void => window.print();

const toggleView = (): void => {
  state.openCv = !state.openCv;
};
</script>

<template>
  <div
    class="flex justify-center my-6 space-x-6 text-sm md:justify-between sm:space-x-10 sm:mt-10 print:hidden"
  >
    <button
      type="button"
      class="flex items-center justify-center w-40 h-12 px-0 font-semibold text-white rounded-2xl bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-48 md:w-60 sm:px-6 dark:bg-red-500 dark:highlight-white/20 dark:hover:bg-red-400"
      @click="print()"
    >
      Print CV
    </button>

    <!-- TODO: Toggle skeleton view (mobile) / normal view (desktop) -->
    <button
      type="button"
      class="flex items-center justify-center w-40 h-12 px-0 font-semibold bg-white shadow-sm rounded-2xl sm:px-6 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-400 sm:w-44 md:w-52 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
      @click="toggleView()"
    >
      Toggle view
    </button>
  </div>

  <CvViewBox :open-cv="state.openCv" />
</template>
