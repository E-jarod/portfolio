<script setup lang="ts">
import { computed, inject, reactive } from 'vue';

import CvBodyCard from './components/cards/CvBodyCard.vue';
import { ProvidedIsEnglish } from './cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

const titles = reactive({
  experiences: computed(() =>
    isEnglish.value ? 'Experiences' : 'Expériences',
  ),
  school: computed(() => (isEnglish.value ? 'Background' : 'Formations')),
});
</script>

<template>
  <CvBodyCard
    :title="titles.experiences"
    class="flex-grow h-auto text-2xlvw"
  >
    <section class="relative flex items-start justify-between">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQHY65mUGU6apw/company-logo_100_100/0/1575540140277?e=1652918400&v=beta&t=FMQ7yz1OjNOt7eU08vKN2m9Vt922Kwlbtla8OdLL8D8"
        alt=" "
        class="flex-shrink-0 object-cover border-2 rounded-lg shadow-md ml-5vw mx-6vw border-slate-100 w-16vw h-16vw"
      />
      <div class="flex flex-col flex-grow">
        <div class="flex flex-col space-y-2vw mb-6vw">
          <div class="flex justify-between">
            <span class="font-bold text-slate-900 text-xlvw"
              >Développeur Full Stack JS</span
            >
            <span class="font-bold bg-red-100 rounded-3xl px-3vw py-1vw"
              >Alternance</span
            >
          </div>
          <div
            class="flex justify-between font-bold space-x-6vw text-slate-400"
          >
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'briefcase']"></fa-icon>
              <span v-text="'Ateliom'"></span>
            </span>
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'location-dot']"></fa-icon>
              <span v-text="'Paris'"></span>
            </span>
            <span class="flex-grow text-right space-x-3vw">
              <fa-icon :icon="['fas', 'calendar-days']"></fa-icon>
              <span>2021 - 2022</span>
            </span>
          </div>
        </div>
        <ul class="list-disc">
          <li>
            Application desktop permettant une conception guidée de
            cloisons vitrées : gestion de l'UI/UX Angular & Electron.
          </li>
          <li>
            Refonte du site web de Correlyce en Angular : gestion de l'UI,
            state management - Angular.<br /><br />
          </li>
        </ul>
      </div>
    </section>
    <section class="relative">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQH0QUe8XKf3dA/company-logo_100_100/0/1603971739251?e=1652918400&v=beta&t=k3q8PonRrV18bccJCpeA1gfPA8Gkp_Rfew6i3iTSrfE"
        alt="pass tech"
        class="object-cover border-2 rounded-lg shadow-md border-slate-100 w-14vw h-14vw"
      />
      2019-2021 | PASS Technologie, Paris | Développeur Angular
      (Alternance)<br />
      Application desktop permettant une conception guidée de cloisons
      vitrées : gestion de l'UI/UX Angular & Electron.<br /><br />
      Refonte du site web de Correlyce en Angular : gestion de l'UI, state
      management - Angular.<br /><br />
    </section>

    <section>
      2020-2022 | Remote avec des amis | Développeur JS (Temps libre)<br />
      Application de gestion d'associations : aide à la planification de
      certains choix. Rôle de développeur fullstack React/Nestjs.
      <br />
      Application de chat en ligne cross-platform : organisateur, avec des
      amis, de tout le projet. Frontend en Flutter, backend en ASP.NET.
    </section>
  </CvBodyCard>

  <CvBodyCard :title="titles.school" class="flex-grow h-auto text-2xlvw">
    <section>
      2019-2021 | CFA INSTA, Paris 2e | (En cours) BTS SIO - Services
      Informatiques aux Organisations | option SLAM - Solutions Logicielles
      et Applications Métier<br /><br />
    </section>

    <section>
      2018-2019 | Lycée Jean Rostand, Villepinte Bac S | option SI -
      Sciences de l'Ingénieur | spécialité ISN - Informatique et Sciences
      du Numérique | Mention : Bien
    </section>
  </CvBodyCard>
</template>
