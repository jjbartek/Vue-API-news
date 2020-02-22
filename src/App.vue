<template>
  <div id="app">
    <Header></Header>
    <main class="page">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer'

export default {
  name: 'app',
  components: {
    Header, Footer
  }
};
</script>

<style lang="scss">
@import 'scss/_helpers';
@import 'scss/form';
@import 'scss/main';
</style>