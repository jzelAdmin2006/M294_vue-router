import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TopSecretView from '../views/TopSecretView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '/secret',
      component: TopSecretView,
      beforeEnter: (to, from, next) => {
        if (new Date().getMinutes() % 2 === 0) {
          console.log('Zugriff erlaubt')
          next()
        } else {
          console.log('Zugriff verweigert')
          next('/')
        }
      }
    },
  ]
})

export default router
