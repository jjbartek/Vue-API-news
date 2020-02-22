<template>
    <div class="form-error" v-if="error.status">
        <div class="form-error__content">
            {{ error.content }}
        </div>
        <button 
            class="form-error__close button button--grey button--close"
            @click="closeError">x</button>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            required: true
        },
        autoRemoval: {
            type: Boolean,
            default: true,
        },
        delay: {
            type: Number,
            default: 13000
        }
    },
    methods: {
        closeError() {
            this.$emit('closed')
        }
    },
    watch: {
        error(error) {
            if(error.status == true && this.autoRemoval) {
                setTimeout(() => {
                    this.closeError()
                }, this.delay)
            }
        }
    }
}
</script>

<style lang="scss">
.form-error {
    padding: 11px 20px 11px 11px;
    position: relative;
    background: #fde9e9;
    border-radius: 3px;

    &__content {
        font-size: 13px;
        color: #e39090;
    }

    &__close {
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
</style>