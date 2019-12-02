<template>
  <div class="global-homes">
    <section-title class="section-title">
      <div>全球热门房源精选</div>
      <template v-slot:subTitle>精选舒适房源供你挑选</template>
    </section-title>
    <city-tab></city-tab>
    <div class="house-cards">
      <house-card></house-card>
      <house-card></house-card>
      <house-card></house-card>
    </div>
    <pub-text-btn></pub-text-btn>
  </div>
</template>
<script>
import CityTab from '@/components/CityTab'
import SectionTitle from '@/components/SectionTitle'
import HouseCard from '@/components/HouseCard'
export default {
  // 全球房源
  name: 'GlobalHomes',
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
.global-homes {
  margin-top: 96px;
}
.section-title {
  margin-bottom: 32px;
}
.house-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap
}
</style>
