<template>
  <div class="wrapper page__wrapper">
    <div class="page__content page__content--full-width">
        <h1 class="headline--page-title"><i class="fas fa-search"></i> Search results</h1>
        <Browsing v-if="browsingMode" v-body-scroll-lock="browsingMode"></Browsing>
        <NewsList v-if="!isLoading"></NewsList>
        <Loader :loading="isLoading"></Loader>
    </div>
  </div>
</template>

<script>
import NewsList from '@/components/newsList'
import Browsing from '@/components/browsing'
import Loader from '@/components/loader'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    computed: {
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
                type: 'search-results', 
                keywords: this.$route.params.keywords 
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
        NewsList, Browsing, Loader
    }
}
</script>

<style lang="scss">
</style>