<template>
  <div id="app" :style="{background: $route.meta.color}">
    <Header />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {Header}
}
</script>

<style lang="sass">
@import ./assets/sass/main

*
  color: $white
  font-family: 'Roboto', sans-serif

#app
  display: flex
  transition: all 0.6s ease

  Header
    +size(160px, 100vh)
    +hoverer(width, 70px, 160px)
    transition: all 0.6s ease
  main
    width: 100%
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    overflow-x: hidden
    overflow-y: scroll
</style>
