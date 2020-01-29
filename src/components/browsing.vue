<template>
    <div class="browsing">
        <header class="browsing__head">
            <div class="wrapper">
                <div class="browsing__closing-bar" v-on:click="exitBrowsing">x</div>
                <h1 class="browsing__title">{{ browsingData.title }}</h1>
            </div>
        </header>
       <embed class="browsing__content" :src="browsingData.url"  width="100%" height="100%">
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex' 

export default {
    computed: {
        ...mapGetters({
            browsingData: 'getBrowsingData'
        }),
    },
    methods: {
        ...mapActions({
            updateMode: 'UPDATE_BROWSING_MODE',
            updateData: 'UPDATE_BROWSING_DATA'
        }),
        exitBrowsing() {
            this.updateMode(false)
        }
    }
}
</script>

<style lang="scss">
    .browsing {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        display: flex;
        flex-direction: column;

        &__head {
            background: #41b883;
            padding: 10px 0;

            .wrapper {
                display: flex;
                align-items: center;
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
        }

        &__title {
            margin-left: 15px;
            color: #fff;
            font-size: 15px;
            font-weight: normal;
        }
    }
</style>