<template>
  <div>
    <div class="basic" v-if="!isShow">
      <section class="hi" >
          Hi!
      </section>
      <section class="welcome">
        <h1>I am Khee</h1>
        <h2>&</h2>
        <h1>I make Websites</h1>
        <button @click="isShow = !isShow">Discover More</button>
      </section>
    </div>
    <div class="detail" :class="{ active: isShow }">
      <AboutMe />
      <!-- <button @click="isShow = !isShow">Close</button> -->
      <div @click="isShow = !isShow" class="close">
        <Close
          btn-size="70"
          x-size="24"
          bg-color="#ecf0f1"
          x-color="#2c3e50"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AboutMe from './AboutMe.vue'
import Close from './Close.vue'
export default {
  name: 'Home',
  data () {
    return {
      isShow: false
    }
  },
  components: {AboutMe, Close}
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/main
div
  overflow: hidden

  .basic
    display: flex
    align-items: flex-start

    .hi
      display: flex
      align-items: center
      font-size: 5rem
      box-sizing: border-box
      padding-top: rem-calc(15px)
      padding-right: rem-calc(40px)

    .welcome
      transition: all 0.6s ease
      h1, h2
        font-family: 'Roboto Slab', serif
      button
        +hoverer(color, $white, $home)
        +hoverer(background, $home, $white)
        transition: all 0.4s ease
        border: 1px solid $white
        margin-top: 0.3rem
        outline: none
        padding: 0.8rem 2rem
        cursor: pointer

  .detail
    position: relative
    background: $white
    transition: width 0.6s ease
    transition: height 0.6s ease
    +size(0,0)
    border-radius: 50%
    overflow: hidden

    .cross-btn
      position: absolute
      right: 2rem
      top: 2rem
      transition: all 0.4s ease
      &:hover
        .cross
          &:before, &:after
            background: $white
      +hoverer(background, $white, $home)
      &:active
        background: tint($home, 20%)

  .detail.active
    +size(100%, 100vh)
    border-radius: 0
    overflow-y: scroll
</style>
