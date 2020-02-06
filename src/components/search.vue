<template>
    <div>
        <div class="search-box">
            <div class="search-box__head">Search articles</div>
            <div class="search-box__container">
                <input
                    type="text"
                    class="search-box__field input"
                    v-model="keywords"
                    placeholder="Enter keywords..">
                <router-link 
                    class="search-box__button button button--green"
                    :to="{ name: 'search-results', params: { keywords: keywords } }"
                    tag="button">
                    <i class="fas fa-search"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           keywords: ''
        }
    }
}
</script>

<style lang="scss">
    .search-box {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 3px;
        box-sizing: border-box;
        padding: 20px;

        &__head {
            color: #938b8b;
            margin-bottom: 15px;
        }

        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__field {
            flex: 1;
            margin-right: 10px;
        }

        &__button {
            width: 80px;
            background: $search-button-background;
            color: $search-color-background;
            outline: 0;
            border: 0;
            cursor: pointer;
            transition: 0.3s ease-in-out opacity;
        }

        &__button:hover {
            opacity: 0.7;
        }
    }
</style>