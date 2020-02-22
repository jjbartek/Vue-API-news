<template>
  <div class="wrapper page__wrapper">
    <div class="page__content page__content--full-width">
        <h1 class="headline headline--has-search headline--page-title">
            <span class="headline__the-title"><i class="headline__icon fas fa-search"></i> Search results</span>
            <Search
                class="headline__search"
                :old-value="$route.params.keywords"
                :simple-search="true"></Search>
        </h1>
        <Browsing v-if="browsingMode" v-body-scroll-lock="browsingMode"></Browsing>
        <NewsList v-if="!isLoading"></NewsList>
        <Loader :loading="isLoading"></Loader>
    </div>
  </div>
</template>

<script>
import NewsList from '@/components/news/newsList'
import Browsing from '@/components/news/browsing'
import Loader from '@/components/elements/loader'
import Search from '@/components/elements/search'
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
        NewsList, Browsing, Loader, Search
    }
}
</script>

<style lang="scss">
</style>