import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/uikey',
      name: 'UiKey',
      component: resolve => require(['@/views/UiKey/Index.vue'], resolve)
    }
  ]
})
