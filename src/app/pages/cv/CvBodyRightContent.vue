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
    height="flex-grow"
    text-size="text-basevw print:text-lgvw"
    additional-content-classes="justify-around"
  >
    <section class="flex items-start justify-between">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQHY65mUGU6apw/company-logo_100_100/0/1575540140277?e=1652918400&v=beta&t=FMQ7yz1OjNOt7eU08vKN2m9Vt922Kwlbtla8OdLL8D8"
        alt="Ateliom"
        class="flex-shrink-0 object-cover border-2 rounded-lg shadow-md ml-5vw mx-6vw border-slate-100 w-16vw h-16vw"
      />
      <div class="flex flex-col flex-grow space-y-6vw">
        <div class="flex flex-col space-y-2vw">
          <div class="flex justify-between">
            <span class="font-bold text-slate-900 text-xlvw">
              Développeur Full Stack JS
              <small
                class="font-bold text-smvw bg-sky-100 rounded-3xl px-3vw py-1vw"
              >
                En cours
              </small>
            </span>
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
        <div>
          <h6 class="font-bold text-red-600 uppercase">DOSIMA</h6>
          <p class="italic text-slate-500">
            App web de vérification du taux d'exposition nucléaire des
            employers de l'IRSN
          </p>
          <ul class="list-disc">
            <li>Scaffolding front-end & back-end & Database</li>
            <li>
              2-3 mois de développement seul sur la partie web, puis
              travail en équipe d'environ 6-7
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
              2-3 mois de développement seul sur la partie web, puis
              travail en équipe d'environ 6-7
            </li>
            <li>
              Mise en place de toutes les tables, endpoints dans le back +
              pages admins et quelques pages dans le front
            </li>
            <li>Configuration des linter, formatter et de TypeScript</li>
          </ul>
        </div>
        <div>
          <h6 class="font-bold text-red-600 uppercase">Intranet</h6>
          <ul class="list-disc">
            <li>Debug de l'intranet</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="flex items-start justify-between">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQH0QUe8XKf3dA/company-logo_100_100/0/1603971739251?e=1652918400&v=beta&t=k3q8PonRrV18bccJCpeA1gfPA8Gkp_Rfew6i3iTSrfE"
        alt="PASS TECH"
        class="flex-shrink-0 object-cover border-2 rounded-lg shadow-md ml-5vw mx-6vw border-slate-100 w-16vw h-16vw"
      />
      <div class="flex flex-col flex-grow space-y-6vw">
        <div class="flex flex-col space-y-2vw">
          <div class="flex justify-between">
            <span class="font-bold text-slate-900 text-xlvw"
              >Développeur Angular</span
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
              <span v-text="'PASS Technologie'"></span>
            </span>
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'location-dot']"></fa-icon>
              <span v-text="'Paris'"></span>
            </span>
            <span class="flex-grow text-right space-x-3vw">
              <fa-icon :icon="['fas', 'calendar-days']"></fa-icon>
              <span>2019 - 2021</span>
            </span>
          </div>
        </div>
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
      </div>
    </section>
    <section class="flex items-start justify-between">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQH94qXpEjr0AQ/company-logo_100_100/0/1632330797331?e=1652918400&v=beta&t=OouaKv3SwJ2zKdvsXB0xuqHbMECPKfYddj8ZFOGK9_M"
        alt="DevFamily"
        class="flex-shrink-0 object-cover border-2 rounded-lg shadow-md ml-5vw mx-6vw border-slate-100 w-16vw h-16vw"
      />
      <div class="flex flex-col flex-grow space-y-6vw">
        <div class="flex flex-col space-y-2vw">
          <div class="flex justify-between">
            <span class="font-bold text-slate-900 text-xlvw"
              >Développeur Full Stack JavaScript / Flutter</span
            >
            <span class="font-bold bg-red-100 rounded-3xl px-3vw py-1vw"
              >Temps libre personel</span
            >
          </div>
          <div
            class="flex justify-between font-bold space-x-6vw text-slate-400"
          >
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'briefcase']"></fa-icon>
              <span v-text="'DevFamily'"></span>
            </span>
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'house-laptop']"></fa-icon>
              <span v-text="'Remote'"></span>
            </span>
            <span class="flex-grow text-right space-x-3vw">
              <fa-icon :icon="['fas', 'calendar-days']"></fa-icon>
              <span>2020 - ?</span>
            </span>
          </div>
        </div>
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
      </div>
    </section>
  </CvBodyCard>

  <CvBodyCard
    :title="titles.school"
    height="h-96vw"
    text-size="text-basevw print:text-lgvw"
    additional-content-classes="justify-between"
  >
    <section class="flex items-start justify-between">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQHIpIhUq6mVyw/company-logo_100_100/0/1519898530333?e=1652918400&v=beta&t=WSjt9efKWxPzjZKYlgBiIT85NL46XUSP_5eisTu3bZM"
        alt="CFA INSTA"
        class="flex-shrink-0 object-cover border-2 rounded-lg shadow-md ml-5vw mx-6vw border-slate-100 w-16vw h-16vw"
      />
      <div class="flex flex-col flex-grow space-y-6vw">
        <div class="flex flex-col space-y-2vw">
          <div class="flex justify-between">
            <span class="font-bold text-slate-900 text-xlvw">
              Concepteur Développeur d'Applications
              <small
                class="font-bold text-smvw bg-sky-100 rounded-3xl px-3vw py-1vw"
              >
                En cours
              </small>
            </span>
            <span class="font-bold bg-red-100 rounded-3xl px-3vw py-1vw"
              >RNCP VI</span
            >
          </div>
          <div
            class="flex justify-between font-bold space-x-6vw text-slate-400"
          >
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'graduation-cap']"></fa-icon>
              <span v-text="'CFA INSTA'"></span>
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
      </div>
    </section>
    <section class="flex items-start justify-between">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQHIpIhUq6mVyw/company-logo_100_100/0/1519898530333?e=1652918400&v=beta&t=WSjt9efKWxPzjZKYlgBiIT85NL46XUSP_5eisTu3bZM"
        alt="CFA INSTA"
        class="flex-shrink-0 object-cover border-2 rounded-lg shadow-md ml-5vw mx-6vw border-slate-100 w-16vw h-16vw"
      />
      <div class="flex flex-col flex-grow space-y-6vw">
        <div class="flex flex-col space-y-2vw">
          <div class="flex justify-between">
            <span class="font-bold text-slate-900 text-xlvw"
              >BTS SIO
              <small class="text-xlvw text-slate-400">|</small> option
              Solutions Logicielles et Applications Métier</span
            >
            <!-- <span class="font-bold bg-red-100 rounded-3xl px-3vw py-1vw"
              >RNCP VI</span
            > -->
          </div>
          <div
            class="flex justify-between font-bold space-x-6vw text-slate-400"
          >
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'graduation-cap']"></fa-icon>
              <span v-text="'CFA INSTA'"></span>
            </span>
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'location-dot']"></fa-icon>
              <span v-text="'Paris'"></span>
            </span>
            <span class="flex-grow text-right space-x-3vw">
              <fa-icon :icon="['fas', 'calendar-days']"></fa-icon>
              <span>2019 - 2021</span>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="flex items-start justify-between">
      <img
        src="https://lycee-jeanrostand.fr/wp-content/uploads/2021/11/lyc%C3%A9e-j-rostand-logo3-miniature.png"
        alt="Lycée Jean Rostand"
        class="flex-shrink-0 object-cover border-2 rounded-lg shadow-md ml-5vw mx-6vw border-slate-100 w-16vw h-16vw"
      />
      <div class="flex flex-col flex-grow space-y-6vw">
        <div class="flex flex-col space-y-2vw">
          <div class="flex justify-between">
            <span class="font-bold text-slate-900 text-xlvw"
              >Bac S
              <small class="text-xlvw text-slate-400">|</small> option
              Sciences de l'Ingénieur
              <small class="text-xlvw text-slate-400">|</small> spécialité
              Informatique et Sciences du Numérique</span
            >
            <!-- <span class="font-bold bg-red-100 rounded-3xl px-3vw py-1vw"
              >RNCP VI</span
            > -->
          </div>
          <div
            class="flex justify-between font-bold space-x-6vw text-slate-400"
          >
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'graduation-cap']"></fa-icon>
              <span v-text="'Lycée Jean Rostand'"></span>
            </span>
            <span class="inline-flex items-center space-x-3vw">
              <fa-icon :icon="['fas', 'location-dot']"></fa-icon>
              <span v-text="'Villepinte'"></span>
            </span>
            <span class="flex-grow text-right space-x-3vw">
              <fa-icon :icon="['fas', 'calendar-days']"></fa-icon>
              <span>2018 - 2019</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </CvBodyCard>
</template>
