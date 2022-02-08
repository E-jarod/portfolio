<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import { ProvidedIsEnglish } from '@pages/cv/cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = reactive({
  french: computed(() => (isEnglish.value ? 'French' : 'Français')),
  english: computed(() => (isEnglish.value ? 'English' : 'Anglais')),
  tamil: computed(() => (isEnglish.value ? 'Tamil' : 'Tamoul')),
  nativeLevel: computed(() => (isEnglish.value ? 'Native' : 'Maternelle')),
  fluentLevel: computed(() => (isEnglish.value ? 'Fluent' : 'Courant')),
});
</script>

<template>
  <ul class="list-none text-xlvw px-4vw">
    <li>
      <transition name="slide" mode="out-in">
        <div
          :key="trad.french"
          class="inline-flex items-center justify-between w-full"
        >
          <div class="inline-flex items-center space-x-4vw">
            <fa-icon :icon="['fas', 'globe-europe']"></fa-icon>
            <span v-text="trad.french"></span>
          </div>
          <span
            class="mx-auto italic font-bold text-xlvw"
            v-text="trad.nativeLevel"
          ></span>
        </div>
      </transition>
    </li>
    <li>
      <transition name="slide" mode="out-in">
        <div
          :key="trad.english"
          class="inline-flex items-center justify-between w-full"
        >
          <div class="inline-flex items-center space-x-4vw">
            <fa-icon :icon="['fas', 'globe-americas']"></fa-icon>
            <span v-text="trad.english"></span>
          </div>
          <span
            class="mx-auto italic font-bold text-xlvw"
            v-text="trad.fluentLevel"
          ></span>
        </div>
      </transition>
    </li>
    <li>
      <transition name="slide" mode="out-in">
        <div
          :key="trad.tamil"
          class="inline-flex items-center justify-between w-full"
        >
          <div class="inline-flex items-center space-x-4vw">
            <fa-icon :icon="['fas', 'globe-asia']"></fa-icon>
            <span v-text="trad.tamil"></span>
          </div>
          <span
            class="mx-auto italic font-bold text-xlvw"
            v-text="trad.nativeLevel"
          ></span>
        </div>
      </transition>
    </li>
  </ul>
</template>
