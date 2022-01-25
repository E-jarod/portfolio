<script setup lang="ts">
import { reactive } from 'vue';

import HeaderRoutesMobileModal from './HeaderRoutesMobileModal.vue';
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
    <div class="-my-1 ml-2 -mr-1 md:hidden">
      <button
        type="button"
        class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        @click="openMobileModal()"
      >
        <span class="sr-only">Navigation</span>
        <fa-icon icon="ellipsis-v" size="lg"></fa-icon>
      </button>
    </div>
    <div class="hidden md:flex items-center">
      <nav>
        <ul class="flex items-center space-x-8">
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link
              class="hover:text-sky-500 dark:hover:text-sky-400"
              :to="link.to"
              v-text="link.label"
            ></router-link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul
          class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800"
        >
          <a
            v-for="(link, index) in socialNavLinks"
            :key="index"
            class="mr-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
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
  <HeaderRoutesMobileModal
    :open-modal="state.openModal"
    @keep-open="state.openModal = $event"
  />
</template>
