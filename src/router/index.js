import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    component: () => import(/* webpackChunkName: "statistics" */ '../views/JoinUs.vue')
  },
  {
    path: '/fleets',
    name: 'Fleets',
    component: () => import(/* webpackChunkName: "statistics" */ '../views/Fleets.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
