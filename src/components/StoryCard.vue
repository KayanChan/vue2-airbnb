<template>
<div class="story-cards">
  <story-card-item v-for="(story, index) in stories" v-bind:key="index" :storyData="story"></story-card-item>
</div>
</template>
<script>
import StoryCardItem from '@/components/StoryCardItem'
export default {
  name: 'StoryCard',
  components: {
    StoryCardItem
  },
  props: ['stories'],
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.story-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.story-card {
  margin-bottom: 48px;
  width: 319px;
  font-size: 28px;
}
.picture {
  width: 315px;
  height: 315px;
  border-radius: 12px;
  background-color: #739397;
}
.introduce {
  margin-top: 16px;
  .city {
    font-weight: bolder;
  }
}
.count {
  display: flex;
  margin-top: 8px;
  font-size: 28px;
  .icon {
    margin-right: 10px;
  }
}
</style>
