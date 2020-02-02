<template>
    <div class="browsing">
        <header class="browsing__head">
            <div class="browsing__opener">
                <button 
                    class="button button--transparent humburger" 
                    :class="{ 'humburger--opened': menuOpened }"
                    @click="openMenu()">
                    <span v-for="item in 4" v-bind:key="item"></span>
                </button>
            </div>
            <div
                class="browsing__container"
                :class="{ 'browsing__container--opened': menuOpened }">
                <button class="button button--black button--circle" @click="exitBrowsing"><i class="far fa-newspaper"></i></button>
                <a class="button button--green button--circle m-l-15" :href="browsingData.url"><i class="fas fa-external-link-alt"></i></a>
            </div>
        </header>
        <div v-if="!pageLoaded" class="browsing__loading">
            <Loader loading="!pageLoaded"></Loader>
        </div>
        <iframe 
            class="browsing__content" 
            :src="browsingData.url" 
            @load="pageLoaded = true"
            width="100%" 
            height="100%"
            sandbox="allow-scripts allow-top-navigation-by-user-activation allow-same-origin"></iframe>
    </div>
</template>

<script>
import Loader from '@/components/loader'
import { mapActions, mapState, mapGetters } from 'vuex' 

export default {
    data() {
        return {
            menuOpened: false,
            pageLoaded: false
        }
    },
    computed: {
        ...mapGetters({
            browsingData: 'getBrowsingData'
        }),
    },
    mounted() {
        setTimeout(() => {
            this.pageLoaded = true;
        }, 3000)
    },
    methods: {
        ...mapActions({
            updateMode: 'UPDATE_BROWSING_MODE',
            updateData: 'UPDATE_BROWSING_DATA'
        }),
        exitBrowsing() {
            this.updateMode(false)
        },
        openMenu() {
            this.menuOpened = this.menuOpened ? false : true
        }
    },
    components: {
        Loader
    }
}
</script>

<style lang="scss">
    .browsing {
        position: fixed;
        z-index: 9999;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        
        &__opener {
            position: absolute;
            z-index: 3;
            left: 0;
            top: 0;
            background: #41b883;
            padding: 0 20px;
            height: 65px;
            display: flex;
            align-items: center;
            border-radius: 0 0 20px 0;
        }

        &__content {
            border: 0;
        }

        &__container {
            position: absolute;
            z-index: 2;
            left: -230px;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 0 20px 0;
            background: #fff;
            height: 65px;
            width: 230px;
            border-right: 1px solid #41b883;
            border-bottom: 1px solid #41b883;
            padding: 20px 20px 20px 80px;
            box-sizing: border-box;
            transition: 0.3s ease-in-out left;

            &--opened {
                left: 0;
            }
        }

        &__closing-bar {
            font-size: 19px; 
            color: #000;
            font-weight: 600;
            background: #fff;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: 0;
        }

        &__title {
            margin-left: 15px;
            color: #fff;
            font-size: 15px;
            font-weight: normal;
            flex: 1 1 auto;
            margin-right: 40px;
        }

        &__loading {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>