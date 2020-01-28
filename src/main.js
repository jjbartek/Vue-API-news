import Vue from 'vue'
import Vuex from 'vuex'
import VueLodash from 'vue-lodash'
import VueRouter from 'vue-router'

import routes from './routes'
import App from './App.vue'
import { store } from './store/store.js'

import axios from 'axios'
import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueLodash)

const router = new VueRouter({
  mode: 'history',
  routes
});

window.axios = axios
Vue.config.productionTip = false

window.vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')