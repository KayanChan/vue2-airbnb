<template>
  <div class="home-card">
    <div class="picture">
      <!-- <img src="https://fakeimg.pl/600x400/333/EEE/" alt=""> -->
    </div>
    <div class="attr">整栋平房 · 1室1卫1床</div>
    <div class="summary">住进老北京•二环东四老城区胡同/LOFT/5号线张自忠路/近簋街/南锣鼓巷/后海/鼓楼/三里屯/工体</div>
    <div class="price">
      <span class="real-price">￥201</span>
      <span class="original-price">￥291每晚</span>
    </div>
    <div class="appraise">
      <div class="stars">
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
      </div>
      <span class="number">17</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HouseCard',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.home-card {
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
.attr {
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
  font-size: 24px;
}
.original-price {
  text-decoration: line-through;
  color: @secondTextColor;
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
  font-size: 32px;
}
.number {
  margin-left: 10px;
  font-weight: normal;
}
</style>
