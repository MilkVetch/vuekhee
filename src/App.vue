<template>
  <div
    id="app"
    :style="{background: $route.meta.color}"
  >
    <main :style="{ outlineColor: borderColor }">
      <router-view class="container"/>
    </main>
    <button
      class="nav-btn"
      :style="{
        background: btnColor,
        color: textColor
      }"
      @mouseover="mouseOver"
      @mouseout="mouseOut"
      @click="openNav = true"
    >
    {{ menu }}
    </button>
    <transition name="nav">
      <nav v-if="openNav">
        <div @click="clickNavButton">
          <Nav />
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>

import Nav from './components/Nav'
export default {
  name: 'App',
  data () {
    return {
      menu: 'Discover More',
      pageColor: this.$route.meta.color,
      btnColor: this.$route.meta.color,
      textColor: '#ecf0f1',
      borderColor: this.$route.meta.color,
      openNav: false
    }
  },
  methods: {
    mouseOver: function () {
      this.btnColor = '#ecf0f1'
      this.textColor = this.$route.meta.color
      this.borderColor = '#ecf0f1'
    },
    mouseOut: function () {
      this.btnColor = this.$route.meta.color
      this.textColor = '#ecf0f1'
      this.borderColor = this.$route.meta.color
    },
    clickNavButton: function () {
      this.btnColor = this.$route.meta.color
      this.borderColor = this.$route.meta.color
      this.openNav = false
    }
  },
  components: { Nav }
}
</script>

<style lang="sass">
@import ./assets/sass/main

.nav-enter-active,
.nav-leave-active
  transition: all .3s ease
.nav-enter,
.nav-leave-to
  transform: scale(0)
  opacity: 0

#app
  transition: all .6s ease
  position: absolute
  +trbl(0, 0, 0, 0)
  main
    background: transparent
    position: absolute
    +trbl(10px, 10px, 10px, 10px)
    border: 1px solid $white
    outline: 10px solid
    box-sizing: border-box
    transition: all .6s ease
    overflow: none

    .container
      box-sizing: border-box
      height: 100%
      overflow-y: auto
  .nav-btn
    position: absolute
    bottom: 10px
    left: 50%
    transform: translateX(-50%)
    padding: 0.8rem 2rem
    transition: all 0.6s ease
    border: 1px solid $white
    border-bottom: none
    outline: none
    cursor: pointer
  nav
    position: absolute
    +trbl(10px, 10px, 10px, 10px)
    background: rgba(0,0,0,.9)
    div
      +size(100%)

</style>
