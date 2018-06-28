<template>
  <div
    class="cross-btn"
    :style="{
      width: crossSize + 'px',
      height: crossSize + 'px',
      background: backColor,
      borderColor: circleColor
    }"
    @mouseover="mouseOver"
    @mouseout="mouseOut"
  >
    <div class="bar" :style="{ width: barSize + 'px' }">
      <div class="bar1" :style="{ background: crossColor, width: barSize + 'px' }"></div>
      <div class="bar2" :style="{ background: crossColor, width: barSize + 'px' }"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Close',
  data () {
    return {
      crossSize: this.btnSize,
      crossColor: this.xColor,
      backColor: this.bgColor,
      circleColor: this.xColor,
      barSize: this.xSize
    }
  },
  props: {
    xColor: String,
    bgColor: String,
    btnSize: Number,
    xSize: Number
  },
  methods: {
    mouseOver: function () {
      this.crossColor = this.bgColor
      this.backColor = this.xColor
    },
    mouseOut: function () {
      this.crossColor = this.xColor
      this.backColor = this.bgColor
    }
  }
}
</script>

<style lang="sass">
@import ../assets/sass/main
.cross-btn
  border-style: solid
  border-width: 2px
  border-radius: 50%
  position: relative
  .bar
    height: 2px
    +centerer
    .bar1, .bar2
      position: absolute
      height: 2px
    .bar1
      transform: rotate(45deg)
    .bar2
      transform: rotate(-45deg)
</style>
