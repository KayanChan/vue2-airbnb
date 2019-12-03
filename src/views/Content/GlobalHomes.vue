<template>
  <div class="global-homes">
    <section-title class="section-title">
      <div>全球热门房源精选</div>
      <template v-slot:subTitle>精选舒适房源供你挑选</template>
    </section-title>
    <house-card :houseSources="globalHouses"></house-card>
    <pub-text-btn>查看更多房源</pub-text-btn>
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
  },
  computed: {
    globalHouses () {
      return this.$store.state.home.globalHouses
    }
  },
  mounted () {
    this.$store.dispatch('getGlobalHouse')
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
</style>
