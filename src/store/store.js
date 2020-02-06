import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    page: {
      type: '',
      keywords: ''
    },
    apiUrl: "https://newsapi.org/v2",
    apiKey: '1a35f1130398454d8244a1d7092ddcd6',
    loadingStatus: false,
    browsingMode: false,
    browsingData: {},
    news: [],
  },
  actions,
  getters,
  mutations
});