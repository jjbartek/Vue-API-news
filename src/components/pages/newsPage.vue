<template>
  <div class="wrapper page__wrapper">
    <div class="page__content">
        <Browsing v-if="browsingMode" v-body-scroll-lock="browsingMode"></Browsing>
        <NewsList v-if="!isLoading"></NewsList>
        <Loader :loading="isLoading"></Loader>
    </div>
    <Sidebar class="page__side-bar"></Sidebar>
  </div>
</template>

<script>
import NewsList from '@/components/news/newsList'
import Browsing from '@/components/news/browsing'
import Loader from '@/components/elements/loader'
import Sidebar from '@/components/elements/sidebar'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    props: ['page'],
    computed: {
        currentPage() {
            return this.page
        },
        ...mapState({
            browsingData: state => state.browsingData,
            browsingMode: state => state.browsingMode
        }),
        ...mapGetters([
            'isLoading'
        ])
    },
    methods: {
        ...mapActions({
            updatePage: 'UPDATE_PAGE',
            updateNews: 'UPDATE_NEWS'
        }),
        loadNews() {
            this.updatePage({
                type: 'news-list', 
                keywords: this.currentPage
            })
            this.updateNews()
        }
    },
    mounted() {
        this.loadNews()
    },
    watch: {
        $route(to, from) {
            this.loadNews()
        }
    },
    components: {
        NewsList, Browsing, Loader, Sidebar
    }
}
</script>

<style lang="scss">
</style>