<template>
   <ul>
    <li v-for="item in nav" :key=item.text :to=item.link class="hvr-underline-reveal">
      <router-link :to=item.link >
        <i :class="item.icon"></i>
        <span>{{ item.text }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/check-circle'
import 'vue-awesome/icons/graduation-cap'
import 'vue-awesome/icons/briefcase'
import 'vue-awesome/icons/user'

export default {
  name: 'Nav',
  data () {
    return {
      isShow: false,
      nav: [
        {icon: 'fa fa-home', text: 'Home', link: '/'},
        {icon: 'fa fa-user', text: 'About Me', link: 'about'},
        {icon: 'fas fa-medal', text: 'Skills', link: '/Skills'},
        {icon: 'fa fa-graduation-cap', text: 'Education', link: '/Education'},
        {icon: 'fa fa-briefcase', text: 'Work Exp', link: '/WorkExp'},
        {icon: 'fa fa-comment', text: 'Contact', link: '/Contact'}
      ],
      btnColor: this.$route.meta.color,
      fontColor: '#ecf0f1',
      borderT: 'transparent'
    }
  }
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/main

ul
  margin: 0
  padding: 0
  height: 100%
  list-style: none
  padding-left: 0
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center
  li
    display: block

    a
      width: 8rem
      padding: 1rem 0 1rem 0
      color: $white
      text-decoration: none
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center

      i
        margin-right: .4rem

</style>
