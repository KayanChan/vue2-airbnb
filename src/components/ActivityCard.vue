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
  props: ['activities'],
  data () {
    return {}
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
