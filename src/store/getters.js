export default {
    filterNews: state => {
        return state.news.filter(item => item.urlToImage != null && item.content != null && item.title != null)
    },
    isLoading: state => {
        return state.loadingStatus
    },
    getBrowsingData: state => {
        return state.browsingData
    }
}