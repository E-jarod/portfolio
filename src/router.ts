import { createRouter, createWebHistory } from 'vue-router';

import { appRoutes as routes } from './app/app.routes';

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
