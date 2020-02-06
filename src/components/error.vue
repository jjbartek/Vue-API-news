<template>
    <div class="error" :class="{ [errorClass]: typeof errorClass != undefined }">
        
        <div class="error__head">
            <i class="fas fa-frown m-r-10"></i>
            <span>An error has occured</span>
        </div>
        <div class="error__body">
            <p class="error__content">{{ content }}</p>
            TO DO: SEARCH INPUT, MAYBE SOMEWHERE OUTSIDE THE ERROR COMPONENT
            <button v-if="buttonText" class="button" @click="buttonClick">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String, 
            required: false
        },
        errorClass: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: true
        }
    },
    methods: {
        buttonClick() {
            this.$emit('button-click')
        }
    }
}
</script>

<style lang="scss">
.error {
    border-radius: 3px;
    background: #fff;
    padding: 20px;

    &__head {
        color: #41b883;
        font-size: 18px;
        font-weight: 600;
    }

    &__content {
        color: #938b8b;
    }
}
</style>