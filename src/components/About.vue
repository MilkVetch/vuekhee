<template>
  <div class="aboutBox" id="aboutBox">
    <img :src="imgSrc" />
    <h2>Kia Ora.</h2>
    <p>{{ msg }}</p>
    <Gap :starNumber="5" :starSize="0.5" starColor="#B7E0D7"/>
    <h1>What I can do.</h1>
    <h2>Design what you want.</h2>
    <p>I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
    <h2>Develop what you need.</h2>
    <p>I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
    <Gap :starNumber="5" :starSize="0.5" starColor="#B7E0D7"/>
    <h1>I can help.</h1>
    <h2>I’m currently available for freelance work.</h2>
    <p>If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</p>
    <a class="btn" href="MAILTO:457804000@qq.com?subject=Hi%20Khee"><i class="far fa-envelope"></i>MESSAGE ME</a>
  </div>
</template>

<script>
import Gap from './Gap'
export default {
  name: 'About',
  data () {
    return {
      msg: "I'm a web designer / developer based in Auckland, New Zealand. I have a passion for web design and love to create for web and mobile devices.",
      imgSrc: 'static/khee.png'
    }
  },
  components: { Gap }
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/main

*
  text-align: center

.aboutBox
  padding-bottom: 5rem

img
  +size(180px)
  +bp(medium-up)
    +size(200px)
  border-radius: 50%
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.45)
  display: block
  margin: 3rem auto
  background: tint($about, 60%)

h1
  color: shade($about, 70%)
h2
  color: #793B3E
p
  color: shade($about, 80%)

a.btn
  display: inline-block
  margin-top: 20px
  border-radius: 5px
  color: shade($about, 70%)
  padding: 1rem 1.5rem
  border: 1px solid shade($about, 70%)
  background: #B7E0D7
  text-decoration: none
  transition: all .3s ease
  &:hover
    background: shade($about, 10%)
    color: $white
  i
    margin-right: .5rem
</style>
