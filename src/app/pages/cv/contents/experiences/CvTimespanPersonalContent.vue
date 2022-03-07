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
  todoAssoListFromScratch: computed(() =>
    isEnglish.value
      ? 'Planning / Modeling from scratch'
      : 'Planification / Modélisation from scratch',
  ),
  todoAssoListScaffold: computed(() =>
    isEnglish.value
      ? 'Scaffold front-end and tooling configurations'
      : 'Scaffold front-end et configurations des outils',
  ),
  todoAssoSomePages: computed(() =>
    isEnglish.value
      ? 'Development of a few pages'
      : 'Dévelopement de quelques pages',
  ),
  devFamilyPresentation: computed(() =>
    isEnglish.value
      ? 'Web app used to manage the technical parts of DevFamily'
      : 'App web qui sert à gerer les parties techniques de DevFamily',
  ),
  devFamilyListScaffold: computed(() =>
    isEnglish.value
      ? 'Scaffold front-end, back-end and database'
      : 'Scaffold front-end, back-end et base de données',
  ),
});
</script>

<template>
  <div>
    <h6 class="font-bold text-red-600 uppercase">
      Todo Asso ( app &
      <Transition name="slide" mode="out-in">
        <span :key="trad.titlePart" v-text="trad.titlePart + ' )'"></span>
      </Transition>
    </h6>
    <Transition name="slide" mode="out-in">
      <p
        :key="trad.todoAssoPresentation"
        class="italic text-slate-500"
        v-text="trad.todoAssoPresentation"
      ></p>
    </Transition>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.todoAssoListFromScratch" class="list-disc pl-5vw">
        <li v-text="trad.todoAssoListFromScratch"></li>
        <li v-text="trad.todoAssoListScaffold"></li>
        <li v-text="trad.todoAssoSomePages"></li>
      </ul>
    </Transition>
  </div>
  <div>
    <h6 class="font-bold text-red-600 uppercase">
      DevFamily ( app &
      <Transition name="slide" mode="out-in">
        <span :key="trad.titlePart" v-text="trad.titlePart + ' )'"></span>
      </Transition>
    </h6>
    <Transition name="slide" mode="out-in">
      <p
        :key="trad.devFamilyPresentation"
        class="italic text-slate-500"
        v-text="trad.devFamilyPresentation"
      ></p>
    </Transition>
    <Transition name="slide" mode="out-in">
      <ul :key="trad.devFamilyListScaffold" class="list-disc pl-5vw">
        <li v-text="trad.todoAssoListFromScratch"></li>
        <li v-text="trad.devFamilyListScaffold"></li>
      </ul>
    </Transition>
  </div>
</template>
