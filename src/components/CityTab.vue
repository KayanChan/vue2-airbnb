<template>
  <div>
    <ul class="city-tab">
      <li class="active">北京</li>
      <li>上海</li>
      <li>广州</li>
      <li>深圳</li>
      <li>珠海</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CityTab',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.city-tab {
  height: 124px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  li {
    display: inline-block;
    padding: 28px;
    min-width: 88px;
    height: 40px;
    line-height: 40px;
    border: none;
    outline: none;
    color: @primaryTextColor;
    background-color: #FFFFFF;
    box-shadow: 0px 7px 14px rgba(0, 132, 138, 0.15);
    text-align: center;
    word-wrap: none;
    font-size: 28px;
    font-weight: 700;
    .ignore-border-radius(6px);
    .ignore-border-1px(#D8D8D8);
  }
  .active {
    color: #FFF;
    background-color: @functionColor;
    border-color: @functionColor;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
