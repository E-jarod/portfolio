<script setup lang="ts">
import { onMounted } from 'vue';

import TheHeader from '@layouts/TheHeader.vue';
import TheFooter from '@layouts/TheFooter.vue';

import { initTheme, changeTheme } from './theme.utilities';

onMounted(() => initTheme());
</script>

<template>
  <TheHeader />
  <button
    class="bg-slate-900 dark:bg-white px-4 py-3 rounded-2xl"
    @click="changeTheme()"
  >
    change theme
  </button>
  <TheFooter />
</template>
