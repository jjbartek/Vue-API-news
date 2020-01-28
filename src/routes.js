import newsPage from './components/pages/newsPage'

export default [
    {
        path: '/',
        component: newsPage,
        name: 'Home',
        props: {
            page: 'https://newsapi.org/v2/top-headlines?country=pl&apiKey=1a35f1130398454d8244a1d7092ddcd6'
        }
    },
    {
        path: '/tech',
        component: newsPage,
        name: 'Technology',
        props: {
            page: 'https://newsapi.org/v2/top-headlines?country=pl&category=technology&apiKey=1a35f1130398454d8244a1d7092ddcd6'
        }
    },
    {
        path: '/science',
        component: newsPage,
        name: 'Science',
        props: {
            page: 'https://newsapi.org/v2/top-headlines?country=pl&category=science&apiKey=1a35f1130398454d8244a1d7092ddcd6'
        }
    },
]       