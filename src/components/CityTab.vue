<template>
  <div>
    <ul class="city-tab">
      <li :class="{'active': index === currentCityIdx}"
        v-for="(city, index) in cities"
        v-bind:key="index"
        @click="cityClick(index)">
        <div>{{ city.name }}</div>
        <div v-if="city.houseCount">{{city.houseCount}}+房源</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CityTab',
  props: ['cities'],
  data () {
    return {
      currentCityIdx: 0
    }
  },
  watch: {
    cities () {
      this.cityClick(this.currentCityIdx)
    }
  },
  methods: {
    cityClick: function (index) {
      this.currentCityIdx = index
      this.$emit('listenCurrentCityData', this.cities[index])
    }
  }
}
</script>
<style lang="less" scoped>
.city-tab {
  margin-bottom: 28px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  li {
    display: inline-block;
    margin: 0 8px;
    padding: 28px;
    min-width: 88px;
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

    &:first-child {
      margin-left: 0;
    }
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
