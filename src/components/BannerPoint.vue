<template>
  <ul class="pointer-wrapper">
    <li :class="{'current': currentPointIndex === (item-1)}" v-for="item in totalPointCount" :key="item">
      <div :style="{'width': currentPointIndex === (item-1) ? (widthPercent + '%') : '100%'}"></div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'BannerPoint',
  data () {
    return {
      totalPointCount: 5,
      widthPercent: 0,
      timer: null,
      currentPointIndex: 0
    }
  },
  mounted () {
    this.counter()
  },
  watch: {
    currentPointIndex () {
      this.counter()
    }
  },
  methods: {
    counter: function () {
      let _this = this
      _this.timer = setInterval(function () {
        _this.widthPercent += 10
        if (_this.widthPercent > 100) {
          clearInterval(_this.timer)
          _this.widthPercent = 10
          _this.currentPointIndex++
          if (_this.currentPointIndex === _this.totalPointCount) {
            _this.currentPointIndex = 0
          }
        }
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
.pointer-wrapper {
  display: flex;
  li {
    margin: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #484848;
    overflow: hidden;
    div {
      width: 100%;
      height: 100%;
    }
  }
  li.current {
    width: 32px;
    border-radius: 4px;
    div {
      background-color: #FFF;
    }
  }
}
</style>
