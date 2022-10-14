import { createRouter, createWebHistory } from 'vue-router'
import MenuToGrid from '@/views/menu-to-grid/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/menu-to-grid',
      name: 'MenuToGrid',
      component: MenuToGrid
    }
  ]
})

export default router
