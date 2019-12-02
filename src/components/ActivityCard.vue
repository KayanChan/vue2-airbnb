<template>
  <div class="activity-card">
    <div class="picture">
      <!-- <img src="https://fakeimg.pl/600x400/333/EEE/" alt=""> -->
    </div>
    <div class="country">意大利</div>
    <div class="summary">Learn to Row as a Venetian</div>
    <div class="price">
      <span class="real-price">每人￥201</span>
    </div>
    <div class="appraise">
      <div class="stars">
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
      </div>
      <span class="number">(17)</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ActivityCard',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.activity-card {
  margin-bottom: 48px;
  width: 319px;
  font-weight: 700;
}
.picture {
  width: 319px;
  height: 212px;
  background-color: #739397;
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
.country {
  margin: 16px 0 4px 0;
  width: 100%;
  height: 26px;
  color: @primaryTextColor;
  font-size: 24px;
}
.summary {
  margin-bottom: 4px;
  width: 100%;
  line-height: 34px;
  font-size: 28px;
  .texts-ellipsis
}
.price {
  margin-bottom: 4px;
  font-size: 24px;
  color: #7e7e7e;
}
.appraise {
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
}
.stars {
  display: inline-flex;
  font-size: 28px;
}
.number {
  font-weight: normal;
  color: #7e7e7e;
}
</style>
