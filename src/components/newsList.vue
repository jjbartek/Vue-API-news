<template>
    <div>
        <ul class="news-list">
            <newsBit 
                class="news-list__item"
                v-for="bit in filterNews"
                :bit="bit"
                :key="bit.title"></newsBit>
        </ul>
    </div>
</template>

<script>
import NewsBit from '@/components/newsBit'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'filterNews'
        ])
    },
    methods: {

    },
    components: {
        NewsBit
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
        }

        &__item:nth-of-type(3n+2) {
            margin-left: 2%;
            margin-right: 2%;
        }
    }
</style>