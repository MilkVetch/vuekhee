<template>
  <div class="gapBox">
    <i
      v-for="item in stars"
      :key="item"
      class="fas fa-star fa-spin"
      :style="{ fontSize: size + 'rem', color: color}"
    />
  </div>
</template>

<script>
export default {
  name: 'Gap',
  props: {
    starNumber: Number,
    starSize: Number,
    starColor: String
  },
  data () {
    return {
      stars: this.starNumber,
      size: this.starSize,
      color: this.starColor
    }
  }
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/main
div.gapBox

  +bp(medium-up)
    margin: 5rem
  i
    margin-right: 1rem
    +last(1)
      margin-right: 0
</style>
