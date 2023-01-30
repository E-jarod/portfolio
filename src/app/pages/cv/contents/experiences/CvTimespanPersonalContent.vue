<script setup lang="ts">
import { inject, computed, reactive } from 'vue';

import type { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const trad = reactive({
  titlePart: computed(() =>
    isEnglish.value ? 'showcase site' : 'site vitrine',
  ),
  todoAssoPresentation: computed(() =>
    isEnglish.value
      ? 'Web application that manages different types of associations'
      : "Application web qui gère différents types d'associations",
  ),
  todoAssoList: computed(() =>
    isEnglish.value
      ? [
          'projects from scratch',
          'front-end scaffold',
          'tooling configurations',
          'some pages dev participation',
        ]
      : [
          'projets from scratch',
          'scaffold front-end',
          'configurations des outils',
          'participation au dev de certaines pages',
        ],
  ),
  devFamilyPresentation: computed(() =>
    isEnglish.value
      ? 'Web app used to manage the technical parts of DevFamily'
      : 'App web qui sert à gerer les parties techniques de DevFamily',
  ),
  devFamilyList: computed(() =>
    isEnglish.value
      ? [
          'projects from scratch',
          'front-end scaffold',
          'tooling configurations',
          'front-end scaffold',
          'back-end scaffold',
          'database scaffold',
        ]
      : [
          'projets from scratch',
          'scaffold front-end',
          'configurations des outils',
          'scaffold front-end',
          'scaffold back-end',
          'scaffold base de données',
        ],
  ),
});
</script>

<template>
  <div class="flex flex-col items-start justify-between space-y-2">
    <div class="flex items-center justify-between w-full">
      <h6 class="font-bold text-red-600 uppercase">
        Todo Asso ( app &
        <Transition name="slide" mode="out-in">
          <span
            :key="trad.titlePart"
            v-text="trad.titlePart + ' )'"
          ></span>
        </Transition>
      </h6>
      <Transition name="slide" mode="out-in">
        <p
          :key="trad.todoAssoPresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.todoAssoPresentation"
        ></p>
      </Transition>
    </div>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.todoAssoList[0]" class="flex flex-wrap gap-2">
        <li
          v-for="(item, index) in trad.todoAssoList"
          class="inline-flex p-1 px-2 font-bold rounded text-smvw text-sky-600 bg-sky-100"
          :key="index"
          v-text="item"
        ></li>
      </ul>
    </Transition>
  </div>
  <div class="flex flex-col items-start justify-between space-y-2">
    <div class="flex items-center justify-between w-full">
      <h6 class="font-bold text-red-600 uppercase">
        DevFamily ( app &
        <Transition name="slide" mode="out-in">
          <span
            :key="trad.titlePart"
            v-text="trad.titlePart + ' )'"
          ></span>
        </Transition>
      </h6>
      <Transition name="slide" mode="out-in">
        <p
          :key="trad.devFamilyPresentation"
          class="italic font-semibold text-slate-500"
          v-text="trad.devFamilyPresentation"
        ></p>
      </Transition>
    </div>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.devFamilyList[0]" class="flex flex-wrap gap-2">
        <li
          v-for="(item, index) in trad.devFamilyList"
          class="inline-flex p-1 px-2 font-bold rounded text-smvw text-sky-600 bg-sky-100"
          :key="index"
          v-text="item"
        ></li>
      </ul>
    </Transition>
  </div>
</template>
