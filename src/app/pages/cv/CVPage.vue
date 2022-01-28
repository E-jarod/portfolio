<script setup lang="ts">
// 1vw <=> 1.1 rem <=> 17.6 px
// 10vw <=> 11 rem <=> 176 px
</script>

<template>
  <div class="flex flex-row-reverse justify-between print:hidden mb-7">
    <button>print</button>
  </div>
  <div id="cv" class="flex flex-col mx-auto bg-white rounded-xl p-4vw">
    <div class="bg-sky-100 rounded-xl h-44vw"></div>
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
</style>
