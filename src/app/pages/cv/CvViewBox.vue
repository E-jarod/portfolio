<script setup lang="ts">
import CvBody from './body/CvBody.vue';
import CvFooter from './footer/CvFooter.vue';
import CvHeader from './header/CvHeader.vue';
</script>

<template>
  <div
    class="flex flex-col mx-auto shadow-2xl cv bg-slate-50 rounded-3xl shadow-slate-300 dark:shadow-slate-400"
  >
    <CvHeader />
    <CvBody />
    <CvFooter />
  </div>
</template>

<style scoped>
@import 'tailwindcss/theme' theme(reference);

/* 1vw <=> 1.1 rem <=> 17.6 px */
/* 10vw <=> 11 rem <=> 176 px */
.cv {
  /* responsive A4 size */
  @apply my-[calc(100/23*1vw)] w-[calc(100/23*21vw)] h-[calc(100/23*29.7vw)];
  /* print styling */
  @apply print:[print-color-adjust:exact] print:[size:A4] print:[zoom:100%] print:shadow-none print:flex print:m-0 print:p-0 print:break-after-page print:w-[21cm] print:h-[29.7cm] print:border-0 print:rounded-none;
  /* zoom: 100%; */
}
@page {
  size: A4 portrait;
  margin: 0;
  padding: 0;
}
</style>
