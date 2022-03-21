import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(i18n)
  .use(router)
  .use(store)
  .mount('#app')

import "bootstrap/dist/js/bootstrap.js"
import i18n from './i18n'