<script setup lang="ts">
import { socialInfos } from './cv-footer.utils';
</script>

<template>
  <ul
    class="flex items-center justify-around space-x-6vw p-6vw bg-sky-100 rounded-3xl h-44vw print:rounded-b-none"
  >
    <li
      v-for="(info, index) in socialInfos"
      :key="index"
      class="bg-white w-32vw h-32vw rounded-3xl"
    >
      <a
        class="flex flex-col items-center justify-center w-full h-full space-y-1 text-center sm:space-y-2 p-1vw"
        :href="info.url"
        target="_blank"
        rel="noopener noreferer"
      >
        <fa-icon
          class="block p-0 m-0 sm:hidden"
          :class="info.textColor"
          :icon="['fab', info.icon]"
          size="xs"
        ></fa-icon>
        <fa-icon
          class="hidden p-0 m-0 sm:block md:hidden"
          :class="info.textColor"
          :icon="['fab', info.icon]"
          size="sm"
        ></fa-icon>
        <fa-icon
          class="hidden p-0 m-0 md:block xl:hidden"
          :class="info.textColor"
          :icon="['fab', info.icon]"
          size="lg"
        ></fa-icon>
        <fa-icon
          class="hidden p-0 m-0 xl:block"
          :class="info.textColor"
          :icon="['fab', info.icon]"
          size="2x"
        ></fa-icon>
        <!-- TODO: resize -->
        <!-- size="lg" -->
        <span class="max-w-full font-bold text-basevw">{{
          info.username
        }}</span>
      </a>
    </li>
  </ul>
  <!-- <div class="flex space-x-1 font-bold text-red-500">
    <div class="block sm:hidden">under sm</div>
    <div class="hidden sm:block md:hidden">sm</div>
    <div class="hidden md:block lg:hidden">md</div>
    <div class="hidden lg:block xl:hidden">lg</div>
    <div class="hidden xl:block 2xl:hidden">xl</div>
    <div class="hidden 2xl:block">2xl</div>
    <div class="hidden 2xl:block">over 2xl</div>
  </div> -->
</template>
