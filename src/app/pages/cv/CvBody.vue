<script setup lang="ts">
import CvBodyLeftContent from './CvBodyLeftContent.vue';
import CvBodyRightContent from './CvBodyRightContent.vue';
</script>

<template>
  <div class="flex flex-grow p-5vw space-x-5vw">
    <div class="flex flex-col w-1/3 h-full rounded-3xl space-y-5vw">
      <CvBodyLeftContent />
    </div>
    <div class="flex flex-col w-2/3 h-full rounded-3xl space-y-5vw">
      <CvBodyRightContent />
    </div>
  </div>
</template>
