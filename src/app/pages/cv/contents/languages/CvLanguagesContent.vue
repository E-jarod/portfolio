<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';

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
      <div class="inline-flex items-center justify-between w-full">
        <div class="inline-flex items-center space-x-4vw">
          <fa-icon size="lg" :icon="['fas', 'globe-europe']"></fa-icon>
          <transition name="slide" mode="out-in">
            <span :key="trad.french" v-text="trad.french"></span>
          </transition>
        </div>
        <transition name="slide" mode="out-in">
          <span
            :key="trad.nativeLevel"
            class="mx-auto italic font-bold text-xlvw"
            v-text="trad.nativeLevel"
          ></span>
        </transition>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center justify-between w-full">
        <div class="inline-flex items-center space-x-4vw">
          <fa-icon size="lg" :icon="['fas', 'globe-americas']"></fa-icon>
          <transition name="slide" mode="out-in">
            <span :key="trad.english" v-text="trad.english"></span>
          </transition>
        </div>
        <transition name="slide" mode="out-in">
          <span
            :key="trad.fluentLevel"
            class="mx-auto italic font-bold text-xlvw"
            v-text="trad.fluentLevel"
          ></span>
        </transition>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center justify-between w-full">
        <div class="inline-flex items-center space-x-4vw">
          <fa-icon size="lg" :icon="['fas', 'globe-asia']"></fa-icon>
          <transition name="slide" mode="out-in">
            <span :key="trad.tamil" v-text="trad.tamil"></span>
          </transition>
        </div>
        <transition name="slide" mode="out-in">
          <span
            :key="trad.nativeLevel"
            class="mx-auto italic font-bold text-xlvw"
            v-text="trad.nativeLevel"
          ></span>
        </transition>
      </div>
    </li>
  </ul>
</template>
