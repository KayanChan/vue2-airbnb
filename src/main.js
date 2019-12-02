// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'babel-polyfill'
import 'normalize.css/normalize.css'
import '@/utils/components'
import '@/icons'

Vue.config.productionTip = false

Vue.use(Vuex)

var hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')
require('viewport-units-buggyfill').init({
  hacks: hacks
})
router.afterEach((to, from) => {
  require('viewport-units-buggyfill').refresh()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
