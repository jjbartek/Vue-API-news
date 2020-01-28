import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    page: "",
    news: {},
  },
  actions,
  getters,
  mutations
});