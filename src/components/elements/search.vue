<template>
    <div>
        <div
            class="search-box"
            :class="{ 'search-box--simple': simpleSearch }">
            <div class="search-box__head" v-if="!simpleSearch">Search articles</div>
            <div class="search-box__container">
                <input
                    type="text"
                    class="search-box__field input"
                    v-model="keywords"
                    @keyup.enter="redirectToResults"
                    placeholder="Enter keywords..">
                <button
                    class="search-box__button button button--green"
                    @click="redirectToResults">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <formError
                class="m-t-10"
                v-if="!simpleSearch"
                :error="error"
                @closed="removeError"></formError>
        </div>
    </div>
</template>

<script>
import formError from '@/components/form/formError'

export default {
    props: {
        simpleSearch: {
            type: Boolean,
            default: false
        },
        oldValue: {
            type: String,
            defult: ''
        }
    },
    data() {
        return {
            keywords: '',
            error: {
                status: false,
                content: ''
            }
        }
    },
    mounted() {
        this.keywords = this.oldValue
    },
    methods: {
        redirectToResults() {
            if(this.keywords.trim().length != 0 ) {
                this.$router.push({ name: 'search-results', params: { keywords: this.keywords } })
            } else {
                this.error = {
                    status: true,
                    content: 'Fill the search field, mmmkay?'
                }
            }
        },
        removeError() {
            this.error = {
                status: false,
                content: ''
            }
        }
    },
    components: {
        formError
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

        &--simple {
            max-width: 250px;
            background: none;
            padding: 0;
            display: block;
            box-sizing: border-box;
        }

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
            flex: 1 1 auto;
            width: 100%;
        }

        &__button {
            flex: 1 1 80px;
            background: $search-button-background;
            color: $search-color-background;
            outline: 0;
            border: 0;
            cursor: pointer;
            transition: 0.3s ease-in-out opacity;
            margin-left: 10px;
        }

        &__button:hover {
            opacity: 0.7;
        }
    }
</style>