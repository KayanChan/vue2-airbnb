<template>
  <div class="home-search">
    <div class="search-input">
      <span class="icon-search"></span>
      <span class="placeholder">搜「北京」试试</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeSearch',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.home-search {
  margin: -48px auto 0 auto;
  width: 654px;
  height: 96px;
  line-height: 96px;
}
.search-input {
  position: relative;
  padding-left: 96px;
  background-color: #FFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.01), 0px 3px 18px rgba(0, 0, 0, 0.12);
}
.icon-search {
  position: absolute;
  left: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  background-color: #000;
}
.placeholder {
  display: inline-block;
  font-size: 28px;
  color: @grayTextColor;
}
</style>
