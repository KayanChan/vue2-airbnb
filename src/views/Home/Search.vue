<template>
  <div class="home-search">
    <div class="search-input">
      <SvgIcon icon-class="search" class="icon-search"></SvgIcon>
      <input type="text" placeholder="搜「北京」试试" class="input-ctrl">
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
  display: flex;
  align-items: center;
  height: 96px;
  background-color: #FFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.01), 0px 3px 18px rgba(0, 0, 0, 0.12);
}
.icon-search {
  width: 96px;
  font-size: 56px;
}
.input-ctrl {
  display: inline-block;
  width: 558px;
  line-height: 80px;
  font-size: 28px;
  border: none;
  outline: none;
  color: @secondTextColor;
}
</style>
