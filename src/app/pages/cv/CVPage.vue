<script setup lang="ts">
import { reactive } from 'vue';

// 1vw <=> 1.1 rem <=> 17.6 px
// 10vw <=> 11 rem <=> 176 px
const state = reactive({
  openCv: true,
});

const print = () => {
  window.print();
};
</script>

<template>
  <div
    class="flex justify-between space-x-6 text-sm my-7 sm:mt-10 print:hidden"
  >
    <button
      type="button"
      class="flex items-center justify-center w-1/2 h-12 px-0 font-semibold text-white rounded-2xl bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-96 sm:px-6 dark:bg-red-500 dark:highlight-white/20 dark:hover:bg-red-400"
      @click="print()"
    >
      Print CV
    </button>
    <button
      type="button"
      class="flex items-center justify-center w-1/2 h-12 px-0 font-semibold bg-white shadow-sm rounded-2xl sm:px-6 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-400 md:w-60 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
      @click="state.openCv = !state.openCv"
    >
      Toggle preview
    </button>
  </div>

  <div
    id="cv"
    class="flex flex-col mx-auto bg-slate-50 rounded-3xl"
    :class="{ hidden: !state.openCv }"
  >
    <div
      class="flex items-center justify-between space-x-6vw p-6vw bg-sky-100 rounded-3xl h-56vw print:rounded-t-none"
    >
      <div
        class="flex-shrink-0 w-40vw h-40vw rounded-3xl bg-sky-300"
      ></div>
      <div class="flex-grow">Jarod EJILANE</div>
    </div>

    <div class="flex flex-grow p-5vw space-x-5vw">
      <div class="flex flex-col w-1/3 h-full rounded-3xl space-y-5vw">
        <div class="h-44vw rounded-3xl bg-slate-100"></div>
        <div class="flex-grow bg-red-100 rounded-3xl"></div>
        <div class="h-44vw rounded-3xl bg-slate-100"></div>
      </div>
      <div class="flex flex-col w-2/3 h-full rounded-3xl space-y-5vw">
        <div class="flex-grow rounded-3xl bg-slate-100"></div>
        <div class="flex-grow rounded-3xl bg-slate-100"></div>
        <div class="h-44vw rounded-3xl bg-slate-100"></div>
      </div>
    </div>

    <div
      class="flex items-center justify-around space-x-6vw p-6vw bg-sky-100 rounded-3xl h-44vw print:rounded-b-none"
    >
      <div class="w-32vw h-32vw rounded-3xl bg-sky-300"></div>
      <div class="w-32vw h-32vw rounded-3xl bg-sky-300"></div>
      <div class="w-32vw h-32vw rounded-3xl bg-sky-300"></div>
      <div class="w-32vw h-32vw rounded-3xl bg-sky-300"></div>
      <div class="w-32vw h-32vw rounded-3xl bg-sky-300"></div>
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
  </div>
</template>

<style scoped>
#cv {
  /* responsive A4 size */
  @apply my-[calc(100/23*1vw)] w-[calc(100/23*21vw)] h-[calc(100/23*29.7vw)];
  /* print styling */
  @apply print:flex print:m-0 print:break-after-page print:w-[21cm] print:h-[29.7cm] print:border-0 print:rounded-none;
}
/* @page {
  size: A4;
  margin: 0;
} */

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
</style>
