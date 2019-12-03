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
  data () {
    return {
      houseSources: [
        {
          id: 0,
          typeId: 'apartment',
          roomCount: 1,
          bathroomCount: 1,
          bedCount: 1,
          desc: 'room3厦大沙坡尾大学路正街独立卫生间',
          realPrice: 89,
          originPrice: 99,
          star: 6,
          isPlusChecked: true
        },
        {
          id: 1,
          typeId: 'room',
          roomCount: 1,
          bathroomCount: 1,
          bedCount: 1,
          desc: '《壹所设计》全新ins/近厦大/曾厝安/环岛路/白城沙滩/投影大床',
          realPrice: 134,
          originPrice: 149,
          star: 148,
          isPlusChecked: false
        },
        {
          id: 2,
          typeId: 'loft',
          roomCount: 0,
          bathroomCount: 1.5,
          bedCount: 1,
          desc: '泡泡椅(投影仪)一线无遮挡海景房',
          realPrice: 178,
          originPrice: 189,
          star: 11,
          isPlusChecked: false
        },
        {
          id: 3,
          typeId: 'apartment',
          roomCount: 1,
          bathroomCount: 1.5,
          bedCount: 1,
          desc: '鼓浪屿,厦大,中山路,体育中心旁单身公寓,大浴缸➕投影房 莲坂地铁口100米特价房',
          realPrice: 159,
          originPrice: 199,
          star: 13,
          isPlusChecked: false
        }
      ]
    }
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
