<template>
  <div class="china-hot-story">
     <section-title class="section-title"></section-title>
     <div class="story-cards">
       <story-card></story-card>
       <story-card></story-card>
     </div>
     <pub-text-btn></pub-text-btn>
  </div>
</template>
<script>
import SectionTitle from '@/components/SectionTitle'
import StoryCard from '@/components/StoryCard'
export default {
  name: 'ChinaHotStory',
  components: {
    SectionTitle,
    StoryCard
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.story-cards {
  display: flex;
  justify-content: space-between;
}
.section-title {
  margin-bottom: 32px;
}
</style>
