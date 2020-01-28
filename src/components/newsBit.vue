<template>
    <li class="news-bit">
        <div class="news-bit__headline">
            <a class="news-bit__title" :href="bit.url">{{ bit.title }}</a>
        </div>
        <div class="news-bit__container">
            <div class="news-bit__thumb">
                <a :href="bit.url">
                    <img
                        class="news-bit__image"
                        :src="bit.urlToImage"
                        :alt="bit.title">
                </a>
            </div>
            <p class="news-bit__description">{{ bit.content }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: ['bit']
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
        }
    }
</style>