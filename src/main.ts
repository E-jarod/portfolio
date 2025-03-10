import { createApp } from 'vue';

import { FaIcon } from '@utils/fa-icons.utils';

import './style.css';
import { router } from './router';
import App from './app/App.vue';

createApp(App).component('fa-icon', FaIcon).use(router).mount('#app');
