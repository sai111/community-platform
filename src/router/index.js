import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/error',
    name: 'Error',
    // () => import('./views/login.vue')
    // r => require.ensure([], () => r(require('../components/login.vue')))
    component: (r) => require.ensure([], () => r(require('../views/error/index.vue')))
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
