<template>
  <div class="china-host-destination">
    <section-title class="section-title">国内热门目的地</section-title>
    <city-tab></city-tab>
    <house-card></house-card>
    <pub-text-btn>查看更多成都房源</pub-text-btn>
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
    return {}
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
