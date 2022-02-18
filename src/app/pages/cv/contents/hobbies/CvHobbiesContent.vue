<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = reactive({
  dev: computed(() => (isEnglish.value ? 'Development' : 'Développement')),
  techUpdates: computed(() =>
    isEnglish.value ? 'Tech updates' : 'Veille technologique',
  ),
  sports: 'Basketball',
  system: computed(() => (isEnglish.value ? 'Systems' : 'Systèmes')),
  sciences: 'Sciences',
});
</script>

<template>
  <ul class="flex flex-col flex-wrap list-none text-xlvw px-4vw">
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <fa-icon size="lg" :icon="['fas', 'code']"></fa-icon>
        <transition name="slide" mode="out-in">
          <span class="text-xlvw" :key="trad.dev" v-text="trad.dev"></span>
        </transition>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <fa-icon size="lg" :icon="['fas', 'newspaper']"></fa-icon>
        <transition name="slide" mode="out-in">
          <span
            class="text-xlvw"
            :key="trad.techUpdates"
            v-text="trad.techUpdates"
          ></span>
        </transition>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <fa-icon size="lg" :icon="['fas', 'terminal']"></fa-icon>
        <transition name="slide" mode="out-in">
          <span
            class="text-xlvw"
            :key="trad.system"
            v-text="trad.system"
          ></span>
        </transition>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <fa-icon size="lg" :icon="['fas', 'atom']"></fa-icon>
        <span class="text-xlvw" v-text="trad.sciences"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <fa-icon size="lg" :icon="['fas', 'basketball']"></fa-icon>
        <span class="text-xlvw" v-text="trad.sports"></span>
      </div>
    </li>
  </ul>
</template>
