<template>
  <div class="top-quality-experience">
    <section-title class="section-title">
      <div>高分体验</div>
      <template v-slot:subTitle>在下趟旅程中，不妨预订由本地达人组织的体验活动</template>
    </section-title>
    <city-tab></city-tab>
    <activity-card></activity-card>
    <pub-text-btn>查看更多体验</pub-text-btn>
  </div>
</template>
<script>
import CityTab from '@/components/CityTab'
import SectionTitle from '@/components/SectionTitle'
import ActivityCard from '@/components/ActivityCard'
export default {
  name: 'TopQualityExperience',
  components: {
    CityTab,
    SectionTitle,
    ActivityCard
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.top-quality-experience {
  margin-top: 96px;
}
.section-title {
  margin-bottom: 32px;
}
</style>
