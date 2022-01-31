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
        class="flex flex-col items-center justify-center w-full h-full space-y-2 text-center p-1vw"
        :href="info.url"
        target="_blank"
        rel="noopener noreferer"
      >
        <fa-icon
          :class="info.textColor"
          :icon="['fab', info.icon]"
          size="lg"
        ></fa-icon>
        <span class="max-w-full font-bold text-basevw">{{
          info.username
        }}</span>
      </a>
    </li>
  </ul>
</template>
