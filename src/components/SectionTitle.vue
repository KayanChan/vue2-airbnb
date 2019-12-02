<template>
  <div class="section-title">
    <div class="main-title"><slot></slot></div>
    <div class="sub-title"><slot name="subTitle"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'SectionTitle',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.section-title {
  .main-title {
    line-height: 52px;
    font-size: 36px;
    font-weight: 700;
    color: @primaryTextColor;
  }
  .sub-title {
    line-height: 40px;
    font-size: 28px;
    color: @primaryTextColor;
  }
}
</style>
