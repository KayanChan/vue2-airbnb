<template>
  <div class="home-card">
    <div class="picture">
      <!-- <img src="https://fakeimg.pl/600x400/333/EEE/" alt=""> -->
      <span v-if="houseData.isPlusChecked" class="plus-checked">PLUS</span>
    </div>
    <div :class="{'attr': true, 'plus-checked-type': houseData.isPlusChecked}">
      <span>{{typeMap[houseData.typeId]}} ·</span>
      <span v-if="houseData.roomCount">{{houseData.roomCount}}室</span>
      <span>{{houseData.bathroomCount}}卫{{houseData.bedCount}}床</span>
    </div>
    <div class="summary">{{houseData.desc}}</div>
    <div class="price">
      <span class="real-price">￥{{houseData.realPrice}}</span>
      <span class="original-price">￥{{houseData.orignalPrice}}每晚</span>
    </div>
    <div class="appraise">
      <div class="stars">
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
        <SvgIcon icon-class="green_star"></SvgIcon>
      </div>
      <span class="number">{{houseData.star}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HouseCardItem',
  props: ['houseData'],
  data () {
    return {
      typeMap: {
        loft: '整间LOFT',
        apartment: '整套公寓',
        room: '独立房间'
      }
    }
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
  position: relative;
  width: 319px;
  height: 212px;
  background-color: #739397;
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
.plus-checked {
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 8px;
  background-color: #a02f18;
  color: #FFF;
  font-size: 24px;
  border-radius: 8px;
}
.attr {
  margin: 16px 0 4px 0;
  width: 100%;
  height: 26px;
  color: @primaryTextColor;
  font-size: 24px;
}
.attr.plus-checked-type {
  color: #a02f18;
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
