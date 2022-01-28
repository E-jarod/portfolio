<script setup lang="ts">
import { onMounted } from 'vue';

import TheHeader from '@app/shared/layouts/header/TheHeader.vue';
// import TheFooter from '@app/shared/layouts/footer/TheFooter.vue';

import { initTheme } from '@utils/theme.utils';

onMounted(() => initTheme());
</script>

<template>
  <TheHeader />
  <main class="flex flex-col px-4 print:p-0 print:m-0 sm:px-6 md:px-8">
    <router-view />
  </main>
  <!-- <TheFooter /> -->
</template>
