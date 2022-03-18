import { createApp } from 'vue'
import App from './App.vue'

import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'
import router from './router'

createApp(App)
  .use(router, Vuikit, VuikitIcons)
  .mount('#app')
