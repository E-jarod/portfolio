<script setup lang="ts"></script>

<template>
  <ul class="flex flex-col flex-wrap list-none text-xlvw px-4vw">
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <svg
          class="inline-block stroke-current stroke-0 fill-sky-500 h-8vw w-8vw"
        >
          <symbol id="icon-flutter" viewBox="0 0 32 32">
            <path
              d="M19.085 0l-16.019 16 4.933 4.933 20.912-20.917h-9.809zM19.104 14.763l-8.628 8.609 8.627 8.627h9.831l-8.613-8.624 8.613-8.613z"
            ></path>
          </symbol>
          <use xlink:href="#icon-flutter"></use>
        </svg>
        <span class="text-xlvw" v-text="'Flutter'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <svg
          class="inline-block stroke-current stroke-0 fill-green-500 h-8vw w-8vw"
        >
          <symbol id="icon-vue-dot-js" viewBox="0 0 32 32">
            <path
              d="M32 2.147h-13.253l-2.747 4.733-2.747-4.733h-13.253l16 27.707zM16 18.773l-9.12-15.8h5.907l3.213 5.573 3.213-5.573h5.907z"
            ></path>
          </symbol>
          <use xlink:href="#icon-vue-dot-js"></use>
        </svg>
        <span class="text-xlvw" v-text="'Vue'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <svg
          class="inline-block stroke-current stroke-0 fill-red-500 h-8vw w-8vw"
        >
          <symbol id="icon-angular" viewBox="0 0 32 32">
            <path
              d="M13.24 16.86h5.512l-2.757-6.54zM15.995 0.012l-15.080 5.305 2.3 19.68 12.78 6.991 12.784-6.984 2.299-19.684zM25.405 24.408h-3.515l-1.893-4.668h-8.004l-1.893 4.668h-3.517l9.413-20.864z"
            ></path>
          </symbol>
          <use xlink:href="#icon-angular"></use>
        </svg>
        <span class="text-xlvw" v-text="'Angular'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <fa-icon
          class="text-blue-500 w-8vw h-8vw"
          :icon="['fab', 'react']"
        ></fa-icon>
        <span class="text-xlvw" v-text="'React'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <fa-icon
          class="text-green-500 w-8vw h-8vw"
          :icon="['fab', 'node-js']"
        ></fa-icon>
        <span class="text-xlvw" v-text="'Nest.js'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw mb-10vw">
        <fa-icon
          class="text-green-500 w-8vw h-8vw"
          :icon="['fab', 'android']"
        ></fa-icon>
        <span class="text-xlvw" v-text="'Android'"></span>
      </div>
    </li>

    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <svg
          class="inline-block bg-white rounded-md stroke-current stroke-0 fill-blue-700 h-8vw w-8vw"
        >
          <symbol id="icon-typescript" viewBox="0 0 32 32">
            <path
              d="M0 16v16h32v-32h-32zM25.788 14.725c0.813 0.203 1.432 0.564 2.001 1.153 0.295 0.315 0.732 0.888 0.767 1.027 0.011 0.040-1.381 0.973-2.224 1.497-0.031 0.020-0.153-0.112-0.289-0.315-0.413-0.6-0.844-0.859-1.504-0.904-0.971-0.067-1.595 0.441-1.589 1.289-0.001 0.015-0.001 0.032-0.001 0.050 0 0.201 0.051 0.391 0.14 0.557l-0.003-0.006c0.213 0.441 0.611 0.707 1.853 1.244 2.292 0.987 3.272 1.636 3.881 2.56 0.68 1.031 0.833 2.677 0.371 3.901-0.507 1.331-1.767 2.235-3.54 2.533-0.548 0.097-1.848 0.083-2.437-0.024-1.285-0.229-2.504-0.864-3.256-1.697-0.295-0.324-0.869-1.173-0.833-1.233 0.015-0.021 0.147-0.103 0.293-0.188 0.144-0.081 0.681-0.392 1.189-0.687l0.92-0.533 0.193 0.285c0.269 0.411 0.857 0.975 1.213 1.163 1.021 0.539 2.423 0.463 3.113-0.157 0.257-0.217 0.419-0.54 0.419-0.9 0-0.021-0.001-0.042-0.002-0.062l0 0.003c0-0.371-0.047-0.533-0.24-0.813-0.248-0.355-0.756-0.653-2.199-1.28-1.651-0.711-2.361-1.152-3.012-1.853-0.392-0.445-0.694-0.981-0.871-1.57l-0.008-0.030c-0.121-0.452-0.152-1.585-0.056-2.041 0.34-1.596 1.544-2.707 3.281-3.037 0.564-0.107 1.875-0.067 2.428 0.071zM18.276 16.061l0.011 1.311h-4.167v11.835h-2.947v-11.835h-4.163v-1.285c0-0.712 0.015-1.307 0.035-1.32 0.016-0.021 2.551-0.032 5.623-0.027l5.593 0.016z"
            ></path>
          </symbol>
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <span class="text-xlvw" v-text="'TypeScript'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <svg
          class="inline-block bg-white rounded-md stroke-current stroke-0 fill-yellow-400 h-8vw w-8vw"
        >
          <symbol id="icon-javascript" viewBox="0 0 32 32">
            <path
              d="M0 0h32v32h-32zM29.379 24.368c-0.233-1.46-1.184-2.687-4.004-3.831-0.981-0.46-2.072-0.78-2.396-1.52-0.121-0.44-0.14-0.68-0.061-0.94 0.2-0.861 1.22-1.12 2.020-0.88 0.52 0.16 1 0.56 1.301 1.2 1.379-0.901 1.379-0.901 2.34-1.5-0.36-0.56-0.539-0.801-0.781-1.040-0.84-0.94-1.959-1.42-3.779-1.379l-0.94 0.119c-0.901 0.22-1.76 0.7-2.28 1.34-1.52 1.721-1.081 4.721 0.759 5.961 1.82 1.36 4.481 1.659 4.821 2.94 0.32 1.56-1.16 2.060-2.621 1.88-1.081-0.24-1.68-0.781-2.34-1.781l-2.44 1.401c0.28 0.64 0.6 0.919 1.080 1.479 2.32 2.341 8.12 2.221 9.161-1.339 0.039-0.12 0.32-0.94 0.099-2.2zM17.401 14.708h-2.997c0 2.584-0.012 5.152-0.012 7.74 0 1.643 0.084 3.151-0.184 3.615-0.44 0.919-1.573 0.801-2.088 0.64-0.528-0.261-0.796-0.621-1.107-1.14-0.084-0.14-0.147-0.261-0.169-0.261l-2.433 1.5c0.407 0.84 1 1.563 1.765 2.023 1.14 0.68 2.672 0.9 4.276 0.54 1.044-0.301 1.944-0.921 2.415-1.881 0.68-1.24 0.536-2.76 0.529-4.461 0.016-2.739 0-5.479 0-8.239z"
            ></path>
          </symbol>
          <use xlink:href="#icon-javascript"></use>
        </svg>
        <span class="text-xlvw" v-text="'ES2021'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <fa-icon
          class="text-black w-8vw h-8vw"
          :icon="['fab', 'rust']"
        ></fa-icon>
        <span class="text-xlvw" v-text="'Rust'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <svg
          class="inline-block stroke-current stroke-0 fill fill-purple-500 h-8vw w-8vw"
        >
          <symbol id="icon-kotlin" viewBox="0 0 32 32">
            <path
              d="M1.733 32l15.067-15.333 15.2 15.333zM0 0h16l-16 16.667zM17.867 0l-17.867 18.667v13.333l32-32z"
            ></path>
          </symbol>
          <use xlink:href="#icon-kotlin"></use>
        </svg>
        <span class="text-xlvw" v-text="'Kotlin'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <svg
          class="inline-block bg-white rounded-full stroke-current stroke-0 fill-purple-500 h-8vw w-8vw"
        >
          <symbol id="icon-csharp" viewBox="0 0 32 32">
            <path
              d="M16 0c-8.837 0-16 7.163-16 16v0c0 8.837 7.163 16 16 16v0c8.837 0 16-7.163 16-16v0c0-8.837-7.163-16-16-16v0zM12.568 9.493c0.954 0.006 1.863 0.191 2.697 0.524l-0.050-0.018v1.575c-0.84-0.475-1.844-0.755-2.914-0.755-0.030 0-0.060 0-0.090 0.001l0.005-0c-0.045-0.002-0.099-0.003-0.152-0.003-1.319 0-2.509 0.557-3.345 1.449l-0.002 0.002c-0.842 0.957-1.356 2.22-1.356 3.603 0 0.095 0.002 0.19 0.007 0.285l-0.001-0.013c-0.004 0.081-0.007 0.175-0.007 0.27 0 1.304 0.48 2.495 1.272 3.408l-0.005-0.006c0.785 0.842 1.901 1.367 3.14 1.367 0.059 0 0.119-0.001 0.178-0.004l-0.008 0c0.046 0.001 0.1 0.002 0.154 0.002 1.154 0 2.234-0.315 3.16-0.863l-0.029 0.016-0.005 1.44c-0.944 0.47-2.057 0.745-3.233 0.745-0.094 0-0.187-0.002-0.28-0.005l0.013 0c-0.073 0.003-0.159 0.005-0.246 0.005-1.595 0-3.034-0.665-4.056-1.733l-0.002-0.002c-1.007-1.125-1.623-2.618-1.623-4.255 0-0.102 0.002-0.204 0.007-0.304l-0.001 0.014c-0.004-0.086-0.006-0.187-0.006-0.289 0-1.781 0.695-3.399 1.829-4.598l-0.003 0.003c1.122-1.148 2.686-1.86 4.417-1.86 0.075 0 0.15 0.001 0.225 0.004l-0.011-0c0.040-0.002 0.095-0.004 0.151-0.005l0.009-0c0.042-0.001 0.092-0.001 0.142-0.001 0.007 0 0.015 0 0.022 0h-0.001zM20.385 9.7h1.115l-0.74 3.536h2.215l0.756-3.536h1.080l-0.74 3.536 2.309-0.005-0.2 0.929h-2.3l-0.549 2.64h2.469l-0.235 0.931h-2.421l-0.773 3.5h-1.107l0.756-3.5h-2.2l-0.74 3.5h-1.080l0.74-3.5h-2.32l0.175-0.931h2.331l0.535-2.635h-2.435l0.184-0.929h2.435zM20.575 14.16l-0.575 2.64h2.231l0.564-2.64z"
            ></path>
          </symbol>
          <use xlink:href="#icon-csharp"></use>
        </svg>
        <span class="text-xlvw" v-text="'C#'"></span>
      </div>
    </li>
  </ul>
</template>
