import Vue from 'vue'
import App from './App.vue'

import './init.js'
import "normalize.css/normalize.css";

import store from '@/stores'
import router from '@/router/routes.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
