<template>
    <li class="news-bit">
        <img
            class="news-bit__image"
            v-on:click="browseNews"
            :src="bit.urlToImage"
            :alt="bit.title">
        <div class="news-bit__container">
            <a :href="newsSiteUrl" class="news-bit__source">
                <i class="fas fa-newspaper m-r-5"></i>
                <span>{{ bit.source.name.toLowerCase() }}</span>
            </a>
            <div class="news-bit__headline">
                <h3 v-on:click="browseNews" class="news-bit__title">{{ adjustedTitle }}</h3>
            </div>
        </div>
    </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        adjustedTitle() {
            return this.shortenString(this.removeSource(this.bit.title))
        },
        newsSiteUrl() {
            let exp = /^(http[s]?:\/\/[.\-a-zA-Z0-9]+).*?$/g,
                url = this.bit.url,
                exec = exp.exec(url)

            return Array.isArray(exec) ? exec[1] : url
        }
    },
    methods: {
        removeSource(title) {
            let exp = /^(.*) - .*$/g,
                exec = exp.exec(title)

            return Array.isArray(exec) ? exec[1] : title
        },
        shortenString(string) {
            if(string.length > 55) {
                return string.replace(/^(.{55}[^\s]*).*/, "$1") + "...";
            }

            return string
        },
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
        flex-direction: column;
        border-radius: 3px;
        overflow: hidden;

        &__image {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 3px 3px 0 0;
            cursor: pointer;
            transition: 0.3s ease-in-out opacity;

            &:hover {
                opacity: 0.7;
            }
        }

        &__container {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            padding: 18px 23px;
            box-shadow: 0 0 7px #41b883;
        }

        &__headline {
            font-size: 15px;
            font-weight: 500;
        }

        &__title {
            color: #000;
            margin: 0;
            font-weight: 600;
            line-height: 1.3;
            cursor: pointer;
            transition: 0.3s ease-in-out color;
            word-break: break-word;

            &:hover {
                color: #41b883;
            }
        }

        &__source {
            position: absolute;
            right: 10px;
            top: -40px;
            height: 30px;
            padding: 0 10px;
            background: #fff;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            box-shadow: 0 0 4px #41b883;
            opacity: 0.8;
            font-size: 13px;
            display: flex;
            align-items: center;
            transition: 0.3s ease-in-out opacity;
            color: #000;

            &:hover {
                opacity: 1;
            }
        }
        
    }
</style>