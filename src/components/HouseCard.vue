<template>
  <div class="house-cards">
    <house-card-item v-for="(house, index) in houseSources" v-bind:key="index" :houseData="house"></house-card-item>
  </div>
</template>
<script>
import houseCardItem from '@/components/HouseCardItem'
export default {
  name: 'HouseCard',
  components: {
    houseCardItem
  },
  props: ['houseSources'],
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.house-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap
}
</style>
