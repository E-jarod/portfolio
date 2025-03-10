<script setup lang="ts">
import { computed, inject } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = computed(() =>
  isEnglish.value
    ? {
        applicationName: "Ummanite's full-stack website",
        applicationPresentation:
          'Presentational website of Ummanité association',
        applicationTags: [
          'api REST',
          'docker',
          'gitlab ci/cd',
          'github actions',
          'on premise server management',
          'CI/CD installation from scratch',
          'prisma orm',
          'migration mysql->postegresql',
          'postegresql',
          'nest.js',
          'fastify',
          'Angular 16+',
          'Bootstrap/TailwindCSS',
          'front, back, database from scratch',
        ],
      }
    : {
        applicationName: "site web full-stack de l'association Ummanité",
        applicationPresentation: "Site vitrine de l'association Ummanité",
        applicationTags: [
          'api REST',
          'docker',
          'gitlab ci/cd',
          'github actions',
          'on premise server management',
          'installation de la CI/CD from scratch',
          'prisma orm',
          'migration mysql->postegresql',
          'nest.js',
          'fastify',
          'Angular 16+',
          'Bootstrap/TailwindCSS',
          'front, back, bdd from scratch',
        ],
      },
);
</script>

<template>
  <div class="flex flex-col items-start justify-between space-y-2">
    <div class="flex items-center justify-between w-full">
      <Transition name="slide" mode="out-in">
        <h6
          :key="trad.applicationName"
          class="font-bold text-red-600 uppercase"
          v-text="trad.applicationName"
        ></h6>
      </Transition>
      <Transition name="slide" mode="out-in">
        <p
          :key="trad.applicationPresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.applicationPresentation"
        ></p>
      </Transition>
    </div>
    <Transition name="slide" mode="out-in">
      <ul
        :key="trad.applicationTags[0]"
        class="flex flex-wrap gap-2 lowercase"
      >
        <li
          v-for="(item, index) in trad.applicationTags"
          :key="index"
          class="inline-flex p-1 px-2 font-bold rounded text-smvw text-sky-600 bg-sky-100"
          v-text="item"
        ></li>
      </ul>
    </Transition>
  </div>
</template>
