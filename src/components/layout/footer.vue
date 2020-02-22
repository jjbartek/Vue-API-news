<template>
    <footer class="footer">
        <div class="wrapper footer__wrapper">
            <div class="footer__contianer">
                <div class="footer__item">Powered by <a class="footer__link" href="https://newsapi.org">News API</a></div>
            </div>
            <div class="footer__contianer footer__container--right">
                <div class="footer__item">
                    <a class="footer__link" href="https://github.com/jjbartek"><i class="fab fa-github"></i> jjbartek</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.footer {
    margin-top: 20px;
    margin-bottom: 15px;

    &__wrapper {
        background: #fff;
        padding: 18px 25px;
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__container {

        &--right {
            margin-left: 0;
        }
    }

    &__item {
        font-size: 15px;
        font-weight: 500;
    }

    &__link {
        color: #41b883;
        font-size: 700;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #48a174;
        }
    }
}
</style>    