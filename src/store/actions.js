import axios from 'axios'

export default {
    UPDATE_NEWS: async ({ state, commit, dispatch }) => {
        commit('SET_LOADING_STATUS', true)

        console.log('xd')

        axios.get(state.apiUrl+'/top-headlines', {
                params: {
                    country: 'pl',
                    apiKey: state.apiKey,
                    ...state.page.type == 'news-list' ? { category: state.page.keywords } : { q: state.page.keywords }
                }
            }).then(response => {
                console.log(response, state.page)
                let articles = response.data.articles
                commit('SET_NEWS', Array.isArray(articles) ? articles : [])
                commit('SET_LOADING_STATUS', false)
            }).catch(err => {
                commit('SET_LOADING_STATUS', false)
                //commit('SET_NEWS_ERROR', true)
            })
    },
    UPDATE_PAGE: ({ commit }, { type, keywords }) => {
        commit('SET_PAGE', {
            type,
            keywords
        })
    },
    UPDATE_BROWSING_MODE: ({ state, commit }, mode) => {
        if(mode == false) {
            commit('SET_BROWSING_DATA', {})
        }

        commit('SET_BROWSING_MODE', mode)
    },
    UPDATE_BROWSING_DATA: ({ commit }, data) => {
        commit('SET_BROWSING_DATA', data)
    }
}