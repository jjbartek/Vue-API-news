import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import { apiKey } from './apiKey'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    page: {
      type: '',
      keywords: ''
    },
    apiUrl: "https://newsapi.org/v2",
    apiKey,
    loadingStatus: false,
    browsingMode: false,
    browsingData: {},
    news: [],
  },
  actions,
  getters,
  mutations
})