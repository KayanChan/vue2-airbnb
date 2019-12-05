<template>
  <div>
    <button type="button" :class="{'pub-btn': true, 'anti-color': isAntiColor}"><slot></slot></button>
  </div>
</template>
<script>
export default {
  name: 'PubBtn',
  props: ['isAntiColor'],
  data () {
    return {}
  }
}
</script>
<style lang="less">
.pub-btn {
  box-sizing: border-box;
  padding: 28px;
  min-width: 144px;
  width: 100%;
  height: 96px;
  border: none;
  outline: none;
  color: #FFF;
  background-color: @functionColor;
  // box-shadow: 0px 7px 14px rgba(0, 132, 138, 0.15);
  .ignore-border-radius(6px);
  .ignore-border-1px(#D8D8D8);
  font-weight: bold;
}
.pub-btn.anti-color {
  background-color: #FFF;
  color: @functionColor;
  .ignore-border-1px(@functionColor);
  border-width: 4px;
}
</style>
