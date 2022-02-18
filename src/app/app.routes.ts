import { type RouteRecordRaw } from 'vue-router';

export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/home/HomePage.vue'),
    alias: '/home',
  },
  {
    path: '/cv',
    component: () => import('./pages/cv/CvPage.vue'),
  },
  {
    path: '/contact',
    component: () => import('./pages/contact/ContactPage.vue'),
  },
  {
    path: '/school',
    component: () => import('./pages/school/SchoolPage.vue'),
  },
  {
    path: '/skills',
    component: () => import('./pages/skills/SkillsPage.vue'),
  },
  // Always last
  {
    path: '/:catchAll(.*)*',
    component: () => import('./pages/error/NotFoundErrorPage.vue'),
  },
];
