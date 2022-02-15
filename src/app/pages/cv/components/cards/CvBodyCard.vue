<script setup lang="ts">
defineProps<{
  isRed?: boolean;
  noBackground?: boolean;
  title: string;
  height?: string;
}>();
</script>

<template>
  <div
    class="flex flex-col p-3vw rounded-3xl"
    :class="[
      height,
      {
        'bg-red-50 border-red-200 border-4': !noBackground && isRed,
        'bg-white': !noBackground && !isRed,
        'bg-transparent': noBackground,
        'h-44vw': !height,
        'flex-grow': height === 'flex-grow',
      },
    ]"
  >
    <transition name="slide" mode="out-in">
      <h3
        :key="title"
        class="font-bold text-center text-xlvw mb-3vw"
        :class="{ 'text-red-500': isRed, 'text-sky-500': !isRed }"
        v-text="title"
      ></h3>
    </transition>
    <div class="flex flex-col flex-grow text-basevw text-slate-600">
      <slot></slot>
    </div>
  </div>
</template>
