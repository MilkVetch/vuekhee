<template>
  <div class="box">
    <div class="left">Hi</div>
    <div class="right">
      <div class="line1">I am Khee</div>
      <div class="line2">&</div>
      <div class="line3">I make Websites</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/main

.box
  color: $white
  font-family: 'Roboto', sans-serif
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  +bp(medium-up)
    flex-direction: row
  .left
    font-size: 4rem
    +bp(medium-up)
      font-size: 6rem
      margin-right: 2rem
      margin-top: 1rem
  .right
    text-align: center
    +bp(medium-up)
      text-align: left
    .line1, .line2, .line3
      margin-top: 15px

</style>
