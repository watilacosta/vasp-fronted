import { createApp } from 'vue'
import App from './App.vue'

import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'

createApp(App)
  .use(Vuikit, VuikitIcons)
  .mount('#app')
