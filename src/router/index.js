import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/pilots',
    name: 'Pilots',
    component: () => import(/* webpackChunkName: "pilots" */ '../views/Pilots.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import(/* webpackChunkName: "rules" */ '../views/Rules.vue')
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import(/* webpackChunkName: "staff" */ '../views/Staff.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import(/* webpackChunkName: "statistics" */ '../views/Statistics.vue')
  },
  {
    path: '/join-us',
    name: 'Join Us',
    component: () => import(/* webpackChunkName: "joinUs" */ '../views/JoinUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
