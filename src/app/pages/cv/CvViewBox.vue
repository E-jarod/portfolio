<script setup lang="ts">
import { inject } from 'vue';

import CvHeader from './CvHeader.vue';
import CvBody from './CvBody.vue';
import CvFooter from './CvFooter.vue';
import { ProvidedOpenCv } from './cv.model';

const openCv = inject('open-cv') as ProvidedOpenCv;
</script>

<template>
  <div
    id="cv"
    class="flex flex-col mx-auto shadow-2xl bg-slate-50 rounded-3xl shadow-slate-300 dark:shadow-slate-400"
    :class="{ hidden: !openCv }"
  >
    <CvHeader />
    <CvBody />
    <CvFooter />
  </div>
</template>

<style scoped>
/* 1vw <=> 1.1 rem <=> 17.6 px */
/* 10vw <=> 11 rem <=> 176 px */
#cv {
  /* responsive A4 size */
  @apply my-[calc(100/23*1vw)] w-[calc(100/23*21vw)] h-[calc(100/23*29.7vw)];
  /* print styling */
  @apply [color-adjust:exact] print:flex print:m-0 print:p-0 print:break-after-page print:w-[21cm] print:h-[29.7cm] print:border-0 print:rounded-none;
  /* color-adjust: exact; */
  /* zoom: 100%; */
}
/* @page {
  size: A4;
  margin: 0;
} */
</style>
