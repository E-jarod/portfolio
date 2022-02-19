<template>
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
            2-3 mois de développement seul sur la partie web, puis travail
            en équipe d'environ 6-7
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
            2-3 mois de développement seul sur la partie web, puis travail
            en équipe d'environ 6-7
          </li>
          <li>
            Mise en place de toutes les tables, endpoints dans le back +
            pages admins et quelques pages dans le front
          </li>
          <li>Configuration des linter, formatter et de TypeScript</li>
        </ul>
      </div>
    </div>
  </section>
</template>
