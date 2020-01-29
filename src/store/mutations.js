export default {
    SET_NEWS: (state, val) => {
        state.news = val
    },
    SET_PAGE: (state, val) => {
        state.page = val
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