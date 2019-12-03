<template>
<div class="activity-cards">
  <activity-card-item
    v-for="(activity, index) in activities" v-bind:key="index"
    :activityData="activity"></activity-card-item>
</div>
</template>
<script>
import ActivityCardItem from '@/components/ActivityCardItem'
export default {
  name: 'ActivityCard',
  components: {
    ActivityCardItem
  },
  data () {
    return {
      activities: [
        {
          id: 0,
          country: {
            id: 'Germany',
            name: '德国'
          },
          introduce: 'Dogs Go Green - Walk with the Pack',
          price: 439,
          score: 4.99,
          star: 101
        },
        {
          id: 1,
          country: {
            id: 'Italy',
            name: '意大利'
          },
          introduce: 'The Secrets of Parmigiano Reggiano',
          price: 639,
          score: 4.98,
          star: 806
        },
        {
          id: 2,
          country: {
            id: 'Indonesia',
            name: '印度尼西亚'
          },
          introduce: 'Bali Healer and Holy Bathing Tour',
          price: 4496,
          score: 4.95,
          star: 334
        },
        {
          id: 3,
          country: {
            id: 'Japan',
            name: '日本'
          },
          introduce: 'Feeling Samurai Soul',
          price: 629,
          score: 4.99,
          star: 1000
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.activity-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap
}
</style>
