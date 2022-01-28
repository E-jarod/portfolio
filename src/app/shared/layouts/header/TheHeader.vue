<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue';
import HeaderRoutes from './HeaderRoutes.vue';
</script>

<template>
  <div class="px-4 print:hidden sm:px-6 md:px-8">
    <header
      class="relative flex items-center justify-between pt-6 text-sm font-semibold leading-6 lg:pt-8 text-slate-700 dark:text-slate-200"
    >
      <HeaderLogo />
      <HeaderRoutes />
    </header>
  </div>
</template>
