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
      path: '/auth',
      name: 'auth',
      component: () => import(/* webpackChunkName: auth */'@/views/Auth/Index.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import(/* webpackChunkName: help */'@/views/Help/Index.vue')
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import(/* webpackChunkName: sitemap */'@/views/Sitemap/Index.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import(/* webpackChunkName: terms */'@/views/Terms/Index.vue')
    },
    {
      path: '/privacyPolicy',
      name: 'privacyPolicy',
      component: () => import(/* webpackChunkName: privacyPolicy */'@/views/PrivacyPolicy/Index.vue')
    },
    {
      path: '/uikey',
      name: 'uikey',
      // component: resolve => require(['@/views/UiKey/Index.vue'], resolve)
      component: () => import(/* webpackChunkName: uikey */'@/views/UiKey/Index.vue')
    }
  ]
})
