<template>
    <li class="news-bit">
        <div class="news-bit__headline">
            <h3 v-on:click="browseNews" class="news-bit__title">{{ bit.title }}</h3>
        </div>
        <div class="news-bit__container">
            <div class="news-bit__thumb">
                <img
                    class="news-bit__image"
                    v-on:click="browseNews"
                    :src="bit.urlToImage"
                    :alt="bit.title">
            </div>
            <p class="news-bit__description">{{ bit.content }}</p>
        </div>
    </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions({
            updateMode: 'UPDATE_BROWSING_MODE',
            updateData: 'UPDATE_BROWSING_DATA'
        }),
        browseNews() {
            this.updateMode(true)
            this.updateData(this.bit)
        }
    },
    props: ['bit'],

}
</script>

<style lang="scss">
    .news-bit {
        display: flex;
        flex-wrap: wrap;
        border-radius: 3px;

        &__thumb {
            flex: 0 1 150px;
            margin-right: 20px;
        }

        &__image {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 3px;
            cursor: pointer;
            transition: 0.3s ease-in-out opacity;

            &:hover {
                opacity: 0.7;
            }
        }

        &__description {
            flex: 1;
            font-size: 14px;
            margin: 0;
            color: #8a8989;
        }

        &__container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        &__headline {
            flex: 100%;
            font-size: 17px;
            margin-bottom: 20px;
            font-weight: 500;
        }

        &__title {
            color: #000;
            margin: 0;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s ease-in-out color;

            &:hover {
                color: #41b883;
            }
        }
        
    }
</style>