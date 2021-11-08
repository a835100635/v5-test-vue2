import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/changeLanguage',
    name: 'changeLanguage',
    component: () => import('../views/pages/ChangeLanguage.vue')
  },
  {
    path: '/registerRenderElem',
    name: 'registerRenderElem',
    component: () => import('../views/pages/RegisterRenderElem.vue')
  },
  {
    path: '/registerPlugin',
    name: 'registerPlugin',
    component: () => import('../views/pages/RegisterPlugin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
