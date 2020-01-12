<template>
  <div id="app">
    <ul>
      <li v-for="{ title } in news" :key="title">{{ title }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    news() {
      return this.$store.state.news
    }
  },
  mounted() {
     this.$store.dispatch('LOAD_NEWS')
  },
  components: {
    
  }
}
</script>

<style>

li {
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
}

</style>
