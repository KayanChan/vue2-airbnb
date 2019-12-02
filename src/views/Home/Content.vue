<template>
  <div class="home-content">
    <campaign-reminder></campaign-reminder>
    <campaign-entry></campaign-entry>
    <china-host-promotion></china-host-promotion>
    <china-host-destination></china-host-destination>
    <trust-safety-section></trust-safety-section>
    <global-homes></global-homes>
    <china-hot-story></china-hot-story>
    <top-quality-experience></top-quality-experience>
  </div>
</template>
<script>
import CampaignReminder from '@/views/Content/CampaignReminder'
import CampaignEntry from '@/views/Content/CampaignEntry'
import ChinaHostPromotion from '@/views/Content/ChinaHostPromotion'
import ChinaHostDestination from '@/views/Content/ChinaHostDestination'
import TrustSafetySection from '@/views/Content/TrustSafetySection'
import GlobalHomes from '@/views/Content/GlobalHomes'
import ChinaHotStory from '@/views/Content/ChinaHotStory'
import TopQualityExperience from '@/views/Content/TopQualityExperience'
export default {
  name: 'HomeContent',
  components: {
    CampaignReminder,
    CampaignEntry,
    ChinaHostPromotion,
    ChinaHostDestination,
    TrustSafetySection,
    GlobalHomes,
    ChinaHotStory,
    TopQualityExperience
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.home-content {
  margin: 0 48px;
  background-color: #FFF;
}
</style>
