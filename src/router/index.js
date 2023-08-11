import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export let routes=[
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/products.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
