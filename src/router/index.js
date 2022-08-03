import { createRouter, createWebHistory } from "vue-router";

import home from '@/pages/home.vue'
import about from '@/pages/about.vue'

const baseUrl = '/availability-analysis/'

const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
  },
  {
    path: '/about',
    component: about,
    name: 'about'
  }
]

const router = createRouter({
  base: baseUrl,
  history: createWebHistory(baseUrl),
  routes: routes
})

export default router;