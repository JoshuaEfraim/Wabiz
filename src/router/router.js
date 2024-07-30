import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/components/Home.vue'
import SolutionPage from '@/components/SolutionPage.vue'
import PartnersPage from '@/components/PartnersPage.vue'
import BlogPage from '@/components/BlogPage.vue'


const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/solutionpage', name: "SolutionPage", component: SolutionPage },
  { path: '/partnerspage', name: "PartnersPage", component: PartnersPage},
  { path: '/blogpage', name: "BlogPage", component: BlogPage}


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
console.log(router)

export default router