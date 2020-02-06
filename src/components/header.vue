<template>
    <header class="header">
        <nav class="nav">
            <div class="wrapper nav__wrapper">
                <div class="nav__logo">
                    <router-link to="/" class="logo">
                        <img src="/logo.png" class="logo__img">
                        <span class="logo__text">VUE News</span>
                    </router-link>
                </div>
                <div class="nav__container">
                    <button class="nav__button">Navigation</button>
                    <ul class="nav__list">
                        <li class="nav__item">
                            <router-link to="/" class="nav__link" exact>Poland</router-link>
                        </li>
                        <li class="nav__item">
                            <router-link to="/tech" class="nav__link" exact>Technology</router-link>
                        </li>
                        <li class="nav__item">
                            <router-link to="/science" class="nav__link" exact>Science</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
    .nav {
        background: $main-color;

        &__wrapper {
            display: flex;
            align-content: center;
            padding: 10px 0;
        }

        &__logo {
            flex: 0 0 auto;
        }

        &__container {
            margin-left: 40px;
            display: flex;
            flex-wrap: wrap;
        }

        &__button {
            display: none;
        }

        &__list {
            display: flex;
            align-items: center;
            list-style: none;
            padding: 0;
        }

        &__item {
            color: $nav-link-color;
            margin-right: 15px;
        }

        &__link {
            color: $nav-link-color;
            transition: 0.3s ease color;
            font-size: 15px;
            font-weight: 500;

            &.router-link-active {
                color: $nav-link-active;
            }
        
            &:hover {
                color: $nav-link-hover-color;
            }
        }
    }

    .logo {
        display: flex;
        align-items: center;
        color: $logo-text-color;
        font-weight: 600;
        transition: 0.3s ease opacity;

        &__img {
            max-height: 50px;
            width: auto
        }
        
        &__text {
            flex: 1;
            margin-left: 10px;
        }

        &:hover {
            opacity: 0.8;
        }
    }
</style>