<template>
  <header>
    <nav>
      <ul>
        <li v-for="item in nav" :key=item.text>
          <router-link :to=item.link >
            <span>{{ item.text }}</span>
            <icon :name=item.icon />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

import 'vue-awesome/icons/home'
import 'vue-awesome/icons/check'
import 'vue-awesome/icons/graduation-cap'
import 'vue-awesome/icons/briefcase'
import 'vue-awesome/icons/user'

export default {
  name: 'Header',
  data () {
    return {
      nav: [{icon: 'home', text: 'Home', link: '/'},
        {icon: 'check', text: 'Skills', link: '/Skills'},
        {icon: 'graduation-cap', text: 'Education', link: '/Education'},
        {icon: 'briefcase', text: 'Work Exp', link: '/WorkExp'},
        {icon: 'user', text: 'Contact', link: '/Contact'}
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/main

header
  // +hoverer(background,transparent, rgba(0,0,0,.3))
  nav
    +hoverer(margin-left, -90px, 0)
    +size(160px, 100vh)
    transition: all 0.6s ease

    ul
      display: flex
      flex-direction: column
      justify-content: space-around
      +clearfix
      +size(100%)
      +clean
      list-style: none

      li
        &:hover
          background: rgba(255,255,255,.1)
        a
          display: flex
          align-items: center
          justify-content: flex-end
          padding: 1rem 0
          text-align: right
          text-decoration: none
          &:hover
            span, svg
              color: white
          span
            margin-right: 1.6em
          svg
            margin-right: 1.9rem
</style>
