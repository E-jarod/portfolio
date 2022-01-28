<script setup lang="ts">
// 1vw <=> 1.1 rem <=> 17.6 px
// 10vw <=> 11 rem <=> 176 px
</script>

<template>
  <div class="flex flex-row-reverse justify-between print:hidden mb-7">
    <button>print</button>
  </div>
  <div id="cv" class="flex flex-col mx-auto bg-white rounded-3xl p-4vw">
    <div
      class="bg-sky-100 rounded-t-3xl h-44vw -mt-4vw -mx-4vw print:rounded-t-none"
    ></div>

    <div
      class="leading-[0] left-0 bottom-0 w-full overflow-hidden rotate-180 bg-transparent"
    >
      <svg
        class="relative block w-[calc(100%+1.3px)] h-14 rotate-180"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="fill-sky-100"
        ></path>
      </svg>
    </div>

    <div class="bg-slate-100 h-44vw my-5vw rounded-xl"></div>
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

/* .custom-shape-divider-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
} */

/* .custom-shape-divider-bottom svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 59px;
  transform: rotateY(180deg);
} */

/* .custom-shape-divider-bottom .shape-fill {
  fill: #ffffff;
} */
</style>
