<template>
  <div>
    <button class="pub-btn">xxx</button>
  </div>
</template>
<script>
export default {
  name: 'PubBtn',
  data () {
    return {}
  }
}
</script>
<style lang="less">
.pub-btn {
  padding: 28px;
  min-width: 144px;
  height: 96px;
  border: none;
  outline: none;
  color: @primaryTextColor;
  background-color: #FFFFFF;
  box-shadow: 0px 7px 14px rgba(0, 132, 138, 0.15);
  .ignore-border-radius(6px);
  .ignore-border-1px(#D8D8D8)
}
</style>
