<script setup lang="ts">
import { onMounted } from 'vue';

import TheHeader from '@layouts/TheHeader.vue';
import TheFooter from '@layouts/TheFooter.vue';

import { initTheme, changeTheme } from './theme.utils';

onMounted(() => initTheme());
</script>

<template>
  <TheHeader />
  <main class="flex flex-col">
    <button
      class="bg-slate-900 mx-auto dark:bg-white px-4 py-3 text-slate-500 rounded-2xl"
      @click="changeTheme()"
    >
      change theme
    </button>
  </main>
  <router-view/>
  <TheFooter />
</template>
