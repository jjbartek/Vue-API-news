<template>
  <div class="wrapper page__wrapper">
    <div class="page__content">
        <Browsing v-if="browsingMode" v-body-scroll-lock="browsingMode"></Browsing>
        <NewsList v-if="!isLoading"></NewsList>
        <div v-if="isLoading" class="loading">
            <svg class="loading__gif" version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                <circle fill="#41b883" stroke="none" cx="6" cy="50" r="6">
                    <animateTransform 
                    attributeName="transform" 
                    dur="1s" 
                    type="translate" 
                    values="0 15 ; 0 -15; 0 15" 
                    repeatCount="indefinite" 
                    begin="0.1"/>
                </circle>
                <circle fill="#41b883" stroke="none" cx="30" cy="50" r="6">
                    <animateTransform 
                    attributeName="transform" 
                    dur="1s" 
                    type="translate" 
                    values="0 10 ; 0 -10; 0 10" 
                    repeatCount="indefinite" 
                    begin="0.2"/>
                </circle>
                <circle fill="#41b883" stroke="none" cx="54" cy="50" r="6">
                    <animateTransform 
                    attributeName="transform" 
                    dur="1s" 
                    type="translate" 
                    values="0 5 ; 0 -5; 0 5" 
                    repeatCount="indefinite" 
                    begin="0.3"/>
                </circle>
            </svg>
        </div>
    </div>
    <aside class="page__side-bar">
        Test
    </aside>
  </div>
</template>

<script>
import NewsList from "@/components/newsList"
import Browsing from "@/components/browsing"
import { mapGetters, mapState, mapActions } from "vuex"

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
            this.updatePage(this.currentPage)
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
    components: {
        NewsList, Browsing
    }
}
</script>

<style lang="scss">
    .loading {
        display: flex;
        justify-content: center;

        &__gif {
            height: 100px;
        }
    }
</style>