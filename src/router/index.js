import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Osama from '../views/Osama.vue'
import AboutView from '../views/AboutView.vue'
import Porfal from '../views/Porfal.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView
    },
    {
      path: '/osama',
      name: 'osama',
      component:Osama
    },
    {
      path: '/porfal',
      name: 'porfal',
      component:Porfal
    }

  ]
})

export default router
