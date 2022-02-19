<script setup lang="ts">
import CvSkill from './CvSkill.vue';
import { skills } from './cv-skils.utils';
</script>

<template>
  <ul
    class="flex flex-col justify-between h-full list-none text-xlvw px-4vw"
  >
    <CvSkill
      v-for="(skill, index) in skills"
      :key="index"
      :is-svg="skill.isSvg"
      :separator="skill.separator"
      :is-confirmed-skill="skill.isConfirmedSkill"
      :skill-name="skill.skillName"
      :padding="skill.padding"
      :bg-color="skill.bgColor"
      :fa-icon="skill.faIcon"
      :svg-icon="skill.svgIcon"
    />

    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <div
          class="inline-flex items-center justify-center bg-orange-100 rounded-full w-12vw h-12vw p-2vw"
        >
          <fa-icon
            class="text-orange-500 w-8vw h-8vw"
            :icon="['fab', 'git-alt']"
          ></fa-icon>
        </div>
        <span class="font-bold text-xlvw" v-text="'Git'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <div
          class="inline-flex items-center justify-center bg-green-100 rounded-full w-12vw h-12vw p-3vw"
        >
          <svg
            class="inline-block stroke-current stroke-0 fill-green-500 h-8vw w-8vw"
          >
            <symbol id="icon-manjaro" viewBox="0 0 32 32">
              <path
                d="M0 0v32h9v-23h11.5v-9zM11.5 11.5v20.5h9v-20.5zM23 0v32h9v-32z"
              ></path>
            </symbol>
            <use xlink:href="#icon-manjaro"></use>
          </svg>
        </div>
        <span class="font-bold text-xlvw" v-text="'Manjaro'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <div
          class="inline-flex items-center justify-center rounded-full bg-sky-100 w-12vw h-12vw p-2vw"
        >
          <svg
            class="inline-block stroke-current stroke-0 fill-sky-500 h-8vw w-8vw"
          >
            <symbol id="icon-archlinux" viewBox="0 0 32 32">
              <path
                d="M15.187 0.807c-1.353 3.315-2.168 5.485-3.673 8.702 0.924 0.98 2.057 2.119 3.897 3.405-1.979-0.814-3.328-1.631-4.337-2.479-1.927 4.021-4.947 9.749-11.074 20.758 4.816-2.78 8.549-4.493 12.028-5.149-0.149-0.641-0.234-1.338-0.229-2.063l0.005-0.154c0.077-3.086 1.682-5.459 3.583-5.297 1.901 0.16 3.378 2.794 3.304 5.879-0.014 0.581-0.080 1.139-0.195 1.657 3.441 0.673 7.136 2.383 11.886 5.125-0.936-1.724-1.773-3.278-2.571-4.759-1.258-0.975-2.569-2.244-5.244-3.617 1.839 0.478 3.156 1.029 4.182 1.645-8.12-15.113-8.775-17.122-11.56-23.654zM30.53 28.48v-0.831h-0.311v-0.112h0.749v0.112h-0.313v0.831h-0.125zM31.097 28.48v-0.943h0.189l0.223 0.668c0.021 0.063 0.036 0.11 0.045 0.141 0.011-0.034 0.027-0.085 0.051-0.152l0.225-0.658h0.169v0.943h-0.121v-0.791l-0.275 0.791h-0.112l-0.273-0.803v0.803h-0.121z"
              ></path>
            </symbol>
            <use xlink:href="#icon-archlinux"></use>
          </svg>
        </div>
        <span class="font-bold text-xlvw" v-text="'Arch Linux'"></span>
      </div>
    </li>
    <li>
      <div class="inline-flex items-center w-full space-x-10vw">
        <div
          class="inline-flex items-center justify-center bg-orange-100 rounded-full w-12vw h-12vw p-2vw"
        >
          <svg
            class="inline-block stroke-current stroke-0 fill-orange-500 h-8vw w-8vw"
          >
            <symbol id="icon-ubuntu" viewBox="0 0 32 32">
              <path
                d="M16 0c8.831 0 16 7.169 16 16s-7.169 16-16 16-16-7.169-16-16 7.169-16 16-16zM20.372 23.573c-1.021 0.588-1.372 1.896-0.781 2.919 0.588 1.020 1.896 1.371 2.917 0.779 1.021-0.588 1.372-1.896 0.78-2.919-0.588-1.020-1.895-1.371-2.916-0.779zM16 22.24c-0.94 0-1.831-0.209-2.628-0.58l-1.484 2.66c1.24 0.612 2.637 0.961 4.112 0.961 0.861 0 1.691-0.121 2.48-0.341 0.139-0.857 0.647-1.645 1.46-2.116 0.812-0.468 1.751-0.515 2.56-0.208 1.581-1.551 2.609-3.665 2.76-6.020l-3.047-0.044c-0.28 3.188-2.953 5.688-6.213 5.688zM9.76 16c0-2.111 1.049-3.975 2.653-5.107l-1.56-2.615c-1.872 1.24-3.26 3.159-3.841 5.38 0.675 0.539 1.107 1.379 1.107 2.32 0 0.939-0.432 1.759-1.107 2.319 0.581 2.22 1.969 4.139 3.841 5.379l1.56-2.62c-1.604-1.096-2.653-2.957-2.653-5.056zM5.12 13.864c-1.18 0-2.136 0.956-2.136 2.136s0.956 2.136 2.136 2.136 2.135-0.956 2.135-2.136-0.955-2.136-2.135-2.136zM16 9.76c3.26 0 5.933 2.5 6.213 5.687l3.047-0.045c-0.151-2.353-1.18-4.467-2.76-6.021-0.812 0.309-1.751 0.259-2.56-0.205-0.812-0.469-1.32-1.26-1.46-2.121-0.792-0.213-1.619-0.333-2.48-0.333-1.48 0-2.873 0.347-4.112 0.96l1.484 2.66c0.8-0.372 1.691-0.58 2.628-0.58zM20.372 8.425c1.020 0.589 2.328 0.241 2.919-0.78 0.588-1.020 0.241-2.328-0.784-2.92-1.020-0.587-2.328-0.239-2.919 0.785-0.588 1.019-0.24 2.325 0.784 2.915z"
              ></path>
            </symbol>
            <use xlink:href="#icon-ubuntu"></use>
          </svg>
        </div>
        <span class="text-xlvw" v-text="'Ubuntu'"></span>
      </div>
    </li>
  </ul>
</template>
