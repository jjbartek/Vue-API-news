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
                <div class="nav__container"
                    v-body-scroll-lock="menuOpened"
                    @click.self="closeMenu"
                    :class="{ 'nav__container--opened': menuOpened }">
                    <transition name="bounce">
                        <button
                            class="nav__button cursor-pointer"
                            v-if="!buttonHidden"
                            @click="openMenu">
                            <div class="button button--transparent humburger">
                                <span v-for="item in 4" v-bind:key="item"></span>
                            </div>
                        </button>
                    </transition>
                    <ul class="nav__list" :class="{ 'nav__list--opened': menuOpened }">
                        <li class="nav__item" v-for="link in menuLinks" :key="link.name">
                            <router-link
                                :to="link.url"
                                class="nav__link"
                                exact>{{ link.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menuOpened: false,
            buttonHidden: false,
            menuClosing: false,
            menuLinks: [
                {
                    name: 'Home',
                    url: '/',
                },
                    {
                    name: 'Technology',
                    url: '/tech',
                },
                {
                    name: 'Science',
                    url: '/science',
                }
            ]
        }
    },
    methods: {
        openMenu() {
            this.buttonHidden = true

            setTimeout(() => {
                this.menuOpened = true
            }, 500)
        },
        closeMenu() {
            this.menuClosing = true
            
            setTimeout(() => {
                this.menuOpened = false
                this.menuClosing = false
                this.buttonHidden = false
            }, 500)
        }
    },
    watch: { 
        $route(to, from) {
            if(this.menuOpened) {
                this.closeMenu()
            }
        }
    }
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
            align-items: center;

            @media #{$medium-screens} {
               margin-left: auto;
            
                &--opened {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 99999;
                    background: rgba(0, 0, 0, 0.15);
                    padding: 0;
                    margin: 0;
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                }
            }
        }

        &__button {
            display: none;
            outline: 0;
            align-items: center;
            justify-content: center;
            background: #35495e;
            border: 0;
            box-sizing: border-box;
            height: 40px;
            width: 50px;
            padding-top: 5px;
            border-radius: 3px;
            margin-left: auto;

            @media #{$medium-screens} {
                display: flex;
            }
        }

        &__list {
            display: flex;
            align-items: center;
            list-style: none;
            padding: 0;
            margin: 0;

            @media #{$medium-screens} {
                display: none;

                &--opened {
                    display: flex;
                    flex-direction: column;
                    flex: 1 0 100%;
                    overflow: hidden;
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    width: 230px;
                    max-width: 100%;
                    background: #35495e;
                }
            }
        }

        &__item {
            color: $nav-link-color;
            margin-right: 15px;

            @media #{$medium-screens} {
                 .nav__list--opened > & {
                    margin-right: 0;
                    margin-top: 10px;
                }
                
                .nov__list--opened &:first-child {
                    margin-top: 0;
                }
            }
        }

        &__link {
            color: $nav-link-color;
            transition: 0.3s ease color;
            font-size: 15px;
            font-weight: 500;

            &:hover {
                color: $nav-link-hover-color;
            }

            @media #{$medium-screens} {
                .nav__list--opened & {
                    font-size: 20px;
                    color: #fff;
                }
            }

            &.router-link-active {
                color: $nav-link-active;
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

    .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>