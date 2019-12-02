<template>
  <div class="trust-safety-section">
    <section-title class="section-title">旅行保障</section-title>
    <ul class="items">
      <li>
        <div class="flag"></div>
        <div class="text"><span class="highline">安心房源保障</span>人工审核所有中国房源页面信息，入住更放心</div>
      </li>
      <li>
        <div class="flag"></div>
        <div class="text"><span class="highline">安心房源保障</span>人工审核所有中国房源页面信息，入住更放心</div>
      </li>
      <li>
        <div class="flag"></div>
        <div class="text"><span class="highline">安心房源保障</span>人工审核所有中国房源页面信息，入住更放心</div>
      </li>
    </ul>
  </div>
</template>
<script>
import SectionTitle from '@/components/SectionTitle'
export default {
  // 安全保障
  name: 'TrustSafetySection',
  components: {
    SectionTitle
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.trust-safety-section {
  margin-top: 96px;
}
.items {
  padding: 48px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  li {
    display: flex;
    margin-bottom: 48px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .flag {
    margin-right: 40px;
    width: 64px;
    height: 64px;
    background-color: #739397;
  }
  .text {
    width: 454px;
    line-height: 32px;
    font-size: 28px;
    color: #484848;
  }
  .highline {
    font-weight: bold;
  }
}
</style>
