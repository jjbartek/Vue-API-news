<template>
  <div class="wrapper page__wrapper">
    <div class="page__content">
        <Search></Search>
        <NewsList v-if="filtered_news" :news="filtered_news"></NewsList>
    </div>
    <aside class="page__side-bar">
        Test
    </aside>
  </div>
</template>

<script>
import NewsList from "@/components/newsList"
import Search from "@/components/search"
import { mapState, mapActions } from "vuex"

export default {
    props: ['page'],
    data() {
        return {
            currentPage: this.page
        }
    },
    computed: {
        news() {
            return this.$store.state.news
        },
        filtered_news() {
            return this._.filter(this.$store.state.news, item => item.urlToImage != null && item.content != null && item.title != null)
        }
    },
    methods: {
        ...mapActions({
            changePage: 'CHANGE_PAGE',
            updateNews: 'UPDATE_NEWS'
        }),
        loadNews() {
            this.changePage(this.page)
            this.updateNews()
        }
    },
    created() {
        this.loadNews()
    },
    watch: {
        currentPage() {
            this.loadNews()
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.currentPage = vm.page
        })
    },
    components: {
        NewsList, Search
    }
}
</script>

<style lang="scss">

</style>