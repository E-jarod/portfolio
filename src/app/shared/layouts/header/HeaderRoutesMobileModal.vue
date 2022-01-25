<script setup lang="ts">
import HeaderThemeToggler from './HeaderThemeToggler.vue';
import { navLinks, socialNavLinks } from './header-nav-links.utils';

interface Props {
  openModal: boolean;
}
defineProps<Props>();

const emits = defineEmits(['keepOpen']);

const closeModal = (): void => {
  emits('keepOpen', false);
};
</script>

<template>
  <div v-if="openModal" class="md:hidden">
    <div
      class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
      id="headlessui-dialog-overlay-7"
      aria-hidden="true"
      @click="closeModal()"
    ></div>
    <div
      class="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
    >
      <button
        type="button"
        class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        tabindex="0"
        @click="closeModal()"
      >
        <span class="sr-only">Close navigation</span>
        <svg
          viewBox="0 0 10 10"
          class="w-2.5 h-2.5 overflow-visible"
          aria-hidden="true"
        >
          <path
            d="M0 0L10 10M10 0L0 10"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
      <ul
        class="space-y-6 mb-6 pb-6 border-b border-slate-200 dark:border-slate-200/10"
      >
        <li v-for="(link, index) in navLinks" :key="index">
          <router-link
            class="hover:text-sky-500 dark:hover:text-sky-400"
            :to="link.to"
            v-text="link.label"
            @click="closeModal()"
          ></router-link>
        </li>
      </ul>
      <ul class="space-y-6">
        <li v-for="(link, index) in socialNavLinks" :key="index">
          <a
            class="hover:text-sky-500 dark:hover:text-sky-400"
            :href="link.socialLink"
            target="_blank"
            rel="noopener noreferer"
            v-text="link.label"
            @click="closeModal()"
          ></a>
        </li>
      </ul>
      <div
        class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10"
      >
        <div class="flex items-center justify-between">
          <label
            for="theme"
            class="text-slate-700 font-normal dark:text-slate-400"
          >
            Switch theme
          </label>
          <HeaderThemeToggler
            class="w-16 relative flex justify-center items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200"
          />
        </div>
      </div>
    </div>
  </div>
</template>
