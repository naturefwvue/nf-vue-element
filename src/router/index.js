import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/eleBase',
    name: 'eleBase',
    component: () => import('../views/eleBase.vue')
  },
  {
    path: '/eleForm',
    name: 'eleForm',
    component: () => import('../views/eleForm.vue')
  },
  {
    path: '/eleFind',
    name: 'eleFind',
    component: () => import('../views/eleFind.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
