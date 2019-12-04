<template>
  <div class="china-host-destination">
    <section-title class="section-title">国内热门目的地</section-title>
    <city-tab :cities="destinationCities" v-on:listenCurrentCityData="getCurrentCityData"></city-tab>
    <house-card :houseSources="destinationHouses"></house-card>
    <pub-text-btn>查看更多{{currentCityName}}房源</pub-text-btn>
  </div>
</template>
<script>
import CityTab from '@/components/CityTab'
import SectionTitle from '@/components/SectionTitle'
import HouseCard from '@/components/HouseCard'
export default {
  // 中国热门房源精选
  name: 'ChinaHostDestination',
  components: {
    CityTab,
    SectionTitle,
    HouseCard
  },
  data () {
    return {
      currentCityData: {}
    }
  },
  computed: {
    destinationHouses () {
      return this.$store.state.home.destinationHouses
    },
    destinationCities () {
      return this.$store.state.home.destinationCities
    },
    currentCityName () {
      return this.currentCityData.name || ''
    }
  },
  mounted () {
    this.$store.dispatch('getDestinationHouse')
    this.$store.dispatch('getDestinationCity')
  },
  methods: {
    getCurrentCityData: function (cityData) {
      this.currentCityData = cityData
    }
  }
}
</script>
<style lang="less" scoped>
.china-host-destination {
  margin-top: 96px;
}
.section-title {
  margin-bottom: 32px;
}
</style>
