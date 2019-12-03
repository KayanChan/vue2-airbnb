<template>
  <div class="china-host-promotion">
    <section-title class="section-title">
      <div>秋季特惠房源</div>
      <template v-slot:subTitle>
        低至8折，可叠加使用礼券
      </template>
    </section-title>
    <city-tab :cities="promotionCities"></city-tab>
    <house-card :houseSources="promotionHouses"></house-card>
    <pub-text-btn>查看更多北京房源</pub-text-btn>
  </div>
</template>
<script>
import CityTab from '@/components/CityTab'
import SectionTitle from '@/components/SectionTitle'
import HouseCard from '@/components/HouseCard'
export default {
  // 秋季特惠房源
  name: 'ChinaHostPromotion',
  components: {
    CityTab,
    SectionTitle,
    HouseCard
  },
  data () {
    return {}
  },
  computed: {
    promotionHouses () {
      return this.$store.state.home.promotionHouses
    },
    promotionCities () {
      return this.$store.state.home.promotionCities
    }
  },
  mounted () {
    this.$store.dispatch('getPromotionHouse')
    this.$store.dispatch('getPromotionCity')
  }
}
</script>
<style lang="less" scoped>
.china-host-promotion {
  margin-top: 24px;
}
.section-title {
  margin-bottom: 32px;
}
</style>
