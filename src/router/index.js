import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      // component: resolve => require(['@/views/Home/Index.vue'], resolve)
      component: () => import(/* webpackChunkName: home */'@/views/Home/Index.vue')
    },
    {
      path: '/uikey',
      name: 'uikey',
      // component: resolve => require(['@/views/UiKey/Index.vue'], resolve)
      component: () => import(/* webpackChunkName: uikey */'@/views/UiKey/Index.vue')
    }
  ]
})
