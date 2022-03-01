<script setup lang="ts">
import { inject, computed, type ComputedRef } from 'vue';

import CvTimespan, { type CvTimespanProps } from './CvTimespan.vue';
import { ProvidedIsEnglish } from '../../cv.model';

const isEnglish = inject('is-english') as ProvidedIsEnglish;

type Reffify<Type> = {
  [Property in keyof Type]: ComputedRef<Type[Property]>;
};

const timespans: Reffify<CvTimespanProps>[] = [
  {
    imgSrc: computed(
      () =>
        'https://media-exp1.licdn.com/dms/image/C4D0BAQHY65mUGU6apw/company-logo_100_100/0/1575540140277?e=1652918400&v=beta&t=FMQ7yz1OjNOt7eU08vKN2m9Vt922Kwlbtla8OdLL8D8',
    ),
    imgAlt: computed(() => 'Ateliom logo'),
    title: computed(() =>
      isEnglish.value
        ? ('Full Stack JS Developer' as string)
        : ('Développeur Full Stack JS' as string),
    ),
    structureName: computed(() => 'Ateliom'),
    locationName: computed(() => 'Paris'),
    locationIcon: computed(() => ['fas', 'briefcase']),
    structureIcon: computed(() => ['fas', 'location-dot']),
    startDate: computed(() => new Date(2021, 8, 6)),
  },
];
</script>

<template>
  <CvTimespan
    v-for="(timespan, index) in timespans"
    :key="index"
    :img-src="timespan.imgSrc.value"
    :img-alt="timespan.imgAlt.value"
    :title="timespan.title.value"
    structure-name="Ateliom"
    location-name="Paris"
    :badge-text="timespan.badgeText?.value"
    :structure-icon="['fas', 'briefcase']"
    :location-icon="['fas', 'location-dot']"
    :start-date="new Date(2021, 8, 6)"
  >
    <div>
      <h6 class="font-bold text-red-600 uppercase">DOSIMA</h6>
      <p class="italic text-slate-500">
        App web de vérification du taux d'exposition nucléaire des
        employers de l'IRSN
      </p>
      <ul class="list-disc">
        <li>Scaffolding front-end & back-end & Database</li>
        <li>
          2-3 mois de développement seul sur la partie web, puis travail en
          équipe d'environ 6-7
        </li>
        <li>
          Mise en place de toutes les tables, endpoints dans le back +
          pages admins et quelques pages dans le front
        </li>
        <li>Configuration des linter, formatter et de TypeScript</li>
      </ul>
    </div>
    <div>
      <h6 class="font-bold text-red-600 uppercase">
        Boilerplate Quasar.js & Nest.js
      </h6>
      <ul class="list-disc">
        <li>Scaffolding front-end & back-end & Database</li>
        <li>
          2-3 mois de développement seul sur la partie web, puis travail en
          équipe d'environ 6-7
        </li>
        <li>
          Mise en place de toutes les tables, endpoints dans le back +
          pages admins et quelques pages dans le front
        </li>
        <li>Configuration des linter, formatter et de TypeScript</li>
      </ul>
    </div>
  </CvTimespan>
  <CvTimespan
    img-src="https://media-exp1.licdn.com/dms/image/C4D0BAQH0QUe8XKf3dA/company-logo_100_100/0/1603971739251?e=1652918400&v=beta&t=k3q8PonRrV18bccJCpeA1gfPA8Gkp_Rfew6i3iTSrfE"
    img-alt="PASS Technologie logo"
    title="Développeur Front-end Angular"
    structure-name="PASS Technologie"
    location-name="Paris"
    badge-text="Alternance"
    :structure-icon="['fas', 'briefcase']"
    :location-icon="['fas', 'location-dot']"
    :start-date="new Date(2019, 9, 14)"
    :end-date="new Date(2021, 7, 31)"
  >
    <div>
      <h6 class="font-bold text-red-600 uppercase">
        Promat Cloisons Vitrés
      </h6>
      <p class="italic text-slate-500">
        Application desktop qui concoit des cloisons vitrées pour la
        société Promat, utilisé par des commerciaux pour faire un devis
        afin de transmettre aux clients et constructeurs.
      </p>
      <ul class="list-disc">
        <li>Planification/Modélisation from scratch</li>
        <li>Design de l'interface sur Figma validé par les clients</li>
        <li>Réalisation de l'UI basé sur les maquettes</li>
        <li>Travail principal sur les filtres</li>
      </ul>
    </div>
    <div>
      <h6 class="font-bold text-red-600 uppercase">
        Refonte du site web de Correlyce Atrium Sud
      </h6>
      <p class="italic text-slate-500">
        App web et mobile offrant des ressources pédagogique aux
        établissements public de la région Sud
      </p>
      <ul class="list-disc">
        <li>Respect de la charte graphique donné par les clients</li>
        <li>Gestion du state global via NgRx</li>
        <li>Proposition de nouvelles idées de design</li>
        <li>Refactoring des components Angular de manière optimisé</li>
      </ul>
    </div>
  </CvTimespan>
  <hr class="inline-block border-2 border-slate-100" />
  <CvTimespan
    img-src="https://media-exp1.licdn.com/dms/image/C4D0BAQH94qXpEjr0AQ/company-logo_100_100/0/1632330797331?e=1652918400&v=beta&t=OouaKv3SwJ2zKdvsXB0xuqHbMECPKfYddj8ZFOGK9_M"
    img-alt="DevFamily logo"
    title="Développeur Full Stack JS"
    structure-name="DevFamily"
    location-name="Remote"
    badge-text="Temps libre personnel"
    :structure-icon="['fas', 'users']"
    :location-icon="['fas', 'house-laptop']"
    :start-date="new Date(2020, 7, 1)"
  >
    <div>
      <h6 class="font-bold text-red-600 uppercase">
        Todo Asso (app & site vitrine)
      </h6>
      <p class="italic text-slate-500">
        Application web qui gère différents types d'associations
      </p>
      <ul class="list-disc">
        <li>Planification/Modélisation from scratch</li>
        <li>Scaffolding & Configurations des outils</li>
        <li>Développement de quelques pages</li>
      </ul>
    </div>
    <div>
      <h6 class="font-bold text-red-600 uppercase">
        DevFamily (app & site vitrine)
      </h6>
      <p class="italic text-slate-500">
        App web qui sert à gerer les parties techniques de DevFamily
      </p>
      <ul class="list-disc">
        <li>Planification/Modélisation from scratch</li>
        <li>Scaffolding & Configurations des outils</li>
      </ul>
    </div>
  </CvTimespan>
</template>
