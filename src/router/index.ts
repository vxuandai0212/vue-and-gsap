import { createRouter, createWebHistory } from 'vue-router'
import MenuToGrid from '@/views/menu-to-grid/index.vue'
import StickyImageEffect from '@/views/sticky-image-effect/index.vue'
import OnScrollViewSwitch from '@/views/on-scroll-view-switch/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/menu-to-grid',
      name: 'MenuToGrid',
      component: MenuToGrid
    },
    {
      path: '/sticky-image-effect',
      name: 'StickyImageEffect',
      component: StickyImageEffect
    },
    {
      path: '/on-scroll-view-switch',
      name: 'OnScrollViewSwitch',
      component: OnScrollViewSwitch
    }
  ]
})

export default router
