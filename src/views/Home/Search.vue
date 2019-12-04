<template>
  <div class="home-search">
    <div class="search-input-wrapper" :class="{'fixed-search-input': isSearchInputFixed}">
      <div class="search-input">
        <SvgIcon icon-class="search" class="icon-search"></SvgIcon>
        <input type="text" placeholder="搜「北京」试试" class="input-ctrl">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeSearch',
  props: ['isSearchInputFixed'],
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.home-search {
  margin: -48px auto 0 auto;
  height: 96px;
  line-height: 96px;
}
.search-input-wrapper {
  padding: 0 48px;
}
.search-input {
  position: relative;
  display: flex;
  align-items: center;
  height: 96px;
  background-color: #FFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.01), 0px 3px 18px rgba(0, 0, 0, 0.12);
}
.fixed-search-input {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  padding: 24px 48px;
  background-color: #FFF;
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
