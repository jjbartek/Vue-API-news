import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import Vuex from 'vuex'
import { store } from './store/store.js'
import axios from 'axios'

import 'buefy/dist/buefy.css'

Vue.use(Vuex)
Vue.use(Buefy)
window.axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
