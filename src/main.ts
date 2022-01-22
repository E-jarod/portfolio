import { createApp } from 'vue';

import { FaIcon } from '@utils/fa-icons.utils';

import App from './app/App.vue';
import { router } from './router';
import './index.css';

createApp(App).component('fa-icon', FaIcon).use(router).mount('#app');
