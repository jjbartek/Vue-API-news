import axios from 'axios'

export default {
    UPDATE_NEWS: async ({ state, commit }) => {
        commit('SET_LOADING_STATUS', true)

        axios.get(state.page).then(response => {
            const articles = response.data.articles
            commit('SET_NEWS', Array.isArray(articles) ? articles : [])
            commit('SET_LOADING_STATUS', false)
        }, err => {
            commit('SET_LOADING_STATUS', false)
        })
    },
    UPDATE_PAGE: ({ commit }, val) => {
        commit('SET_PAGE', val)
    },
    UPDATE_BROWSING_MODE: ({ state, commit }, val) => {
        if(val == false) {
            commit('SET_BROWSING_DATA', {})
        }

        commit('SET_BROWSING_MODE', val)
    },
    UPDATE_BROWSING_DATA: ({ commit }, val) => {
        commit('SET_BROWSING_DATA', val)
    }
}