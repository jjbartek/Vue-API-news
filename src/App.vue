<template>
  <div id="app">
    <Header></Header>
    <main class="page">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from '@/components/layout/header';

export default {
  name: 'app',
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import 'scss/_helpers';
@import 'scss/form';
@import 'scss/main';
</style>