import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import CountryFlag from 'vue-country-flag-next'

import router from './router'
import store from './store'
import i18n from './i18n'

const sweetAlertOptions = {
  confirmButtonColor: '#0484bc',
  cancelButtonColor: '#c0c064',
};

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .use(VueSweetalert2, sweetAlertOptions)
  .component('Datepicker', Datepicker)
  .component('country-flag', CountryFlag)
  .mount('#app')