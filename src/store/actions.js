import axios from 'axios'

export default {
    LOAD_NEWS: async ({ commit }) => {
        axios.get('https://newsapi.org/v2/top-headlines?country=pl&apiKey=1a35f1130398454d8244a1d7092ddcd6').then((response) => {
            commit('SET_NEWS', response.data.articles)
            return true
        }, (err) => {
            return false
        })
    }
}