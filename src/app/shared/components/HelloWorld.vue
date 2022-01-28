<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="text-3xl font-bold text-red-500 underline">{{ msg }}</h1>
</template>
