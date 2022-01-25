<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue';
import HeaderRoutes from './HeaderRoutes.vue';
</script>

<template>
  <div class="px-4 sm:px-6 md:px-8">
    <div
      class="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200"
    >
      <HeaderLogo />
      <HeaderRoutes />
    </div>
  </div>
</template>
