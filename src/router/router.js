import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/components/Home.vue'
import Partners from '@/components/Partners.vue'


const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/partner', name: "Partners", component: Partners }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
console.log(router)

export default router