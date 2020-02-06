<template>
    <div>
        <ul class="news-list" v-if="filterNews.length > 0">
            <newsBit 
                class="news-list__item"
                v-for="bit in filterNews"
                :bit="bit"
                :key="bit.title"></newsBit>
        </ul>
        <Error
            v-else
            :buttonText="'Try again'"
            :errorClass="'error--not-found'"
            :content="'Oh no! There was no news found.'"
            @button-click="updateNews"></Error>
    </div>
</template>

<script>
import NewsBit from '@/components/newsBit'
import Error from '@/components/error'
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'filterNews'
        ])
    },
    methods: {
        ...mapActions({
            updateNews: 'UPDATE_NEWS'
        })
    },
    components: {
        NewsBit, Error
    }
}
</script>

<style lang="scss">
    .news-list {
        list-style: none;
        padding-left: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
    
        &__item {
            background: $news-bit-background;
            flex: 0 1 32%;
            margin-bottom: 20px;
            box-sizing: border-box;

            @media #{$medium-screens} {
               flex-basis: 49%
            }

            @media #{$small-screens} {
               flex-basis: 100%
            }
        }

        &__item:nth-of-type(3n+2) {
            margin-left: 2%;
            margin-right: 2%;
        
            @media #{$medium-screens} {
               margin-left: 0;
               margin-right: 0;
            }
        }

        &__item:nth-of-type(even) {
            @media #{$medium-screens} {
                margin-left: 2%;
            }

            @media #{$small-screens} {
               margin-left: 0;
            }
        }

    }
</style>