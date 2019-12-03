<template>
  <div class="china-hot-story">
    <section-title class="section-title">精选旅游故事</section-title>
    <story-card :stories="travelStories"></story-card>
    <pub-text-btn>查看更多故事</pub-text-btn>
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
  },
  computed: {
    travelStories () {
      return this.$store.state.home.travelStories
    }
  },
  mounted () {
    this.$store.dispatch('getTravelStory')
  }
}
</script>
<style lang="less" scoped>
.china-hot-story {
  margin-top: 96px;
}
.section-title {
  margin-bottom: 32px;
}
</style>
