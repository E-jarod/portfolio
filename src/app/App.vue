<script setup lang="ts">
import { onMounted } from 'vue';

import TheHeader from '@layouts/TheHeader.vue';
import TheFooter from '@layouts/TheFooter.vue';

import { initTheme } from '@utils/theme.utils';

onMounted(() => initTheme());
</script>

<template>
  <TheHeader />
  <main class="flex flex-col">
    <router-view />
  </main>
  <TheFooter />
</template>
