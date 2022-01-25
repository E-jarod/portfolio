<script setup lang="ts">
import { onMounted } from 'vue';

import TheHeader from '@app/shared/layouts/header/TheHeader.vue';
import TheFooter from '@app/shared/layouts/footer/TheFooter.vue';

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
