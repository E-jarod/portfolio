<script setup lang="ts">
defineProps<{
  isRed?: boolean;
  title: string;
  height?: string;
}>();
</script>

<template>
  <div
    class="p-3vw rounded-3xl"
    :class="[
      height,
      {
        'bg-red-100': isRed,
        'bg-slate-100': !isRed,
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
    <div class="flex flex-col text-basevw text-slate-600">
      <slot></slot>
    </div>
  </div>
</template>
