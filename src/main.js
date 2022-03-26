import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import router from './router'
import store from './store'
import i18n from './i18n'

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .component('Datepicker', Datepicker)
  .mount('#app')