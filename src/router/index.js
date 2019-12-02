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
      name: 'Home',
      component: resolve => require(['@/views/Home/Index.vue'], resolve)
    },
    {
      path: '/uikey',
      name: 'UiKey',
      component: resolve => require(['@/views/UiKey/Index.vue'], resolve)
    }
  ]
})
