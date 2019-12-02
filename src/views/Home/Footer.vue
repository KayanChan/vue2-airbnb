<template>
  <div class="home-footer">
    <div class="app-brand">
      <span class="icon"></span>
      <ul class="solgon">
        <li class="bolder">立即下载APP</li>
        <li>随时随地探索发现、预订住宿</li>
      </ul>
    </div>
    <div class="download-app">下载应用</div>
  </div>
</template>
<script>
export default {
  name: 'HomeFooter',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.home-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 112px;
  background-color: #FFF;
  border-top: 1px solid @borderColor;
  overflow: hidden;
  .ignore-border-1px {
    border-width: 1px;
  }
}
.app-brand {
  float: left;
  width: 70%;
  height: 112px;
  .icon {
    display: inline-block;
    vertical-align: middle;
    margin: 24px;
    width: 64px;
    height: 64px;
    background-color: @bandColor;
  }
  .solgon {
    display: inline-block;
    vertical-align: middle;
    li {
      height: 32px;
      line-height: 32px;
      font-size: 24px;
    }
  }
}
.download-app {
  float: right;
  box-sizing: border-box;
  padding-right: 24px;
  width: 30%;
  height: 112px;
  line-height: 112px;
  text-align: right;
  font-size: 28px;
  color: @redTextColor;
}
</style>
