<script setup lang="ts">
import { reactive } from 'vue';

import HeaderMobileRoutesModal from './HeaderMobilesRoutesModal.vue';
import HeaderThemeToggler from './HeaderThemeToggler.vue';
import { navLinks, socialNavLinks } from './header-nav-links.utils';

const state = reactive({
  openModal: false,
});

const openMobileModal = () => {
  state.openModal = !state.openModal;
};
</script>

<template>
  <div class="flex items-center">
    <div class="ml-2 -my-1 -mr-1 md:hidden">
      <button
        type="button"
        class="flex items-center justify-center w-8 h-8 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        @click="openMobileModal()"
      >
        <span class="sr-only">Navigation</span>
        <fa-icon icon="ellipsis-v" size="lg"></fa-icon>
      </button>
    </div>
    <div class="items-center hidden md:flex">
      <nav>
        <ul class="flex items-center space-x-8">
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link
              class="hover:text-red-500 dark:hover:text-red-400"
              :to="link.to"
              v-text="link.label"
            ></router-link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul
          class="flex items-center pl-6 ml-6 border-l border-slate-200 dark:border-slate-800"
        >
          <a
            v-for="(link, index) in socialNavLinks"
            :key="index"
            class="block mr-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            :href="link.socialLink"
            target="_blank"
            rel="noopener noreferer"
          >
            <span class="sr-only" v-text="link.srOnlyLabel"></span>
            <fa-icon :icon="link.icon" :size="link.iconSize"></fa-icon>
          </a>

          <HeaderThemeToggler />
        </ul>
      </nav>
    </div>
  </div>
  <HeaderMobileRoutesModal
    :open-modal="state.openModal"
    @keep-open="state.openModal = $event"
  />
</template>
