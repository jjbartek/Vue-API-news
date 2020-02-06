export default {
    SET_NEWS: (state, news) => {
        state.news = news
    },
    SET_PAGE: (state, { type, keywords }) => {
        state.page = {
            type,
            keywords
        }
    },
    SET_LOADING_STATUS: (state, val) => {
        state.loadingStatus = val
    },
    SET_BROWSING_MODE: (state, val) => {
        state.browsingMode = val
    },
    SET_BROWSING_DATA: (state, val) => {
        state.browsingData = val
    }
}