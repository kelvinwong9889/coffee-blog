import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('@/views/SignIn.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: () => import('@/views/ForgotPassword.vue')
    },
    {
      path: '/eatWhat',
      name: 'eatWhat',
      component: () => import('@/views/EatWhat.vue')
    },
  ]
})
