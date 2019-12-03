<template>
  <div class="pub-text-btn"><slot></slot></div>
</template>
<script>
export default {
  name: 'PubTextBtn',
  data () {
    return {}
  }
}
</script>
<style lang="less">
.pub-text-btn {
  box-sizing: border-box;
  margin-bottom: 32px;
  padding: 12px 30px;
  height: 72px;
  line-height: 44px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: @functionColor;
  .ignore-border-1px(@functionColor);
  .ignore-border-radius(8px);
}
</style>
