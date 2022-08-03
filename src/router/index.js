import { createRouter, createWebHistory } from "vue-router";

import home from '@/pages/home.vue'
import about from '@/pages/about.vue'

const routes = [
  {
    path: "/",
    component: home
  },
  {
    path: "/about",
    component: about
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;