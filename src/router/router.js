import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/components/Home.vue'
import Partners from '@/components/Partners.vue'


const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/partner', name: "Partners", component: Partners }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router