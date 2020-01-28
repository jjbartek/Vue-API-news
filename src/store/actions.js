import axios from 'axios'

export default {
    UPDATE_NEWS: async ({ state, commit }) => {
        commit('SET_NEWS', {})

        axios.get(state.page).then((response) => {
            commit('SET_NEWS', response.data.articles)
            return true
        }, (err) => {
            return false
        })
    },
    CHANGE_PAGE: ({ commit }, val) => {
        commit('UPDATE_PAGE', val)
    }
}