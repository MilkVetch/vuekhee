<template>
  <div class="skillBox">
    <h1>My 3C Principle</h1>
    <div class="c-box">
      <div class="c hvr-curl-bottom-right" v-for="item in tcp" :key="item.name">
        <img :src="'static/' + item.name + '.svg'" />
        <h4>{{ item.name }}</h4>
        <p>{{ item.desc }}</p>
      </div>
    </div>
    <Gap :starNumber="5" :starSize="0.5" starColor="#D2B4DE"/>
    <h1>My Handy Tools</h1>
    <div class="tools">
      <div class="design">
        <img src="static/skillicon/adobephotoshop.svg" alt="">
        <img src="static/skillicon/adobeillustrator.svg" alt="">
      </div>
      <div class="html">
        <img src="static/skillicon/html5.svg" alt="">
      </div>
      <div class="css">
        <img src="static/skillicon/css3.svg" alt="">
        <img src="static/skillicon/sass.svg" alt="">
      </div>
      <div class="js">
        <img src="static/skillicon/javascript.svg" alt="">
        <img src="static/skillicon/vuejs.svg" alt="">
        <img src="static/skillicon/react.svg" alt="">
        <img src="static/skillicon/angular.svg" alt="">
      </div>
    </div>

  </div>
</template>

<script>
import Gap from './Gap'
export default {
  name: 'Skills',
  data () {
    return {
      tcp: [
        {
          name: 'Customized',
          desc: 'Since there are so many templates to make websites nowadays, I still believe that customization is the best.',
          icon: 'fas fa-gem'
        },
        {
          name: 'Cross-Platform',
          desc: 'I design and develop websites to make them look good not only desktops, but also on mobile devices like tablets and phones.',
          icon: 'fas fa-gem'
        },
        {
          name: 'Creative',
          desc: 'Smart design can catch people’s attention, under the premise of practicality, I try to be as creative as possible.',
          icon: 'fas fa-gem'
        }
      ]
    }
  },
  components: { Gap }
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/main
*
  text-align: center
  color: #35081D

.skillBox
  padding-bottom: 5rem

h1
  color: #F7C482
  margin-bottom: 2rem

.c-box
  +bp(large-up)
    display: flex
    justify-content: space-around
    flex-wrap: wrap
  .c
    +bp(large-up)
      width: 28%
      border: 1px solid transparent
      &:hover
        border-radius: 5px
        border: 1px solid #64307A
    transition: all .3s ease
    padding-top: 2.5rem

    h4
      margin-bottom: 0.5rem
      color: #EFECC1

    img
      +size(100px)
      +bp(large-up)
        width: 30%
        height: auto
    p
      color: #F7C482
      width: 80%
      margin: 1rem auto 2rem

.tools
  img
    +size(30px)

</style>
