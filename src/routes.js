import newsPage from '@/components/pages/newsPage'
import searchResults from '@/components/pages/searchResults'

export default [
    {
        path: '/',
        component: newsPage,
        name: 'home',
        props: {
            page: ''
        }
    },
    {
        path: '/tech',
        component: newsPage,
        name: 'technology',
        props: {
            page: 'technology'
        }
    },
    {
        path: '/science',
        component: newsPage,
        name: 'science',
        props: {
            page: 'science'
        }
    },
    {
        path: '/search/:keywords',
        component: searchResults,
        name: 'search-results'
    }
]       