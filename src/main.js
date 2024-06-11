import './assets/styles/index.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import VOtpInput from 'vue3-otp-input';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(ToastPlugin);
app.component('v-otp-input', VOtpInput);

app.use(createPinia());
app.use(router);

app.mount('#app');
