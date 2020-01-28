<template>
  <div id="app">
    <Header></Header>
    <main class="page">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "@/components/header"

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
  body {
    background: $bg-color;
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
  }

  .wrapper {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1345px;
  }

  .page {
    margin-top: 50px;

    &__wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__content {
      flex: 1;
      margin-right: 50px;
    }

    &__side-bar {
      width: 25%;
      max-width: 345px;
    }
  }
</style>