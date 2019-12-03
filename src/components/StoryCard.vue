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
  data () {
    return {
      stories: [
        {
          id: 1,
          city: {
            id: 'Guangzhou',
            name: '广州'
          },
          summary: '房东说，欢迎体验你的 “珠江之夜”。',
          likeCount: 37,
          commentCount: 3
        },
        {
          id: 2,
          city: {
            id: 'Taizhou',
            name: '台州'
          },
          summary: '去这家深藏最美渔村的海边石墅 赏一场不容错过的东海日出！',
          likeCount: 65,
          commentCount: 2
        },
        {
          id: 3,
          city: {
            id: 'Bangkok',
            name: '曼谷'
          },
          summary: '曼谷有座四合院，隐秘又惊艳',
          likeCount: 63,
          commentCount: 4
        },
        {
          id: 4,
          city: {
            id: 'Waxford',
            name: '威克斯福德'
          },
          summary: '为了体验地道的爱尔兰乡村风情，我竟然住进城堡马厩！',
          likeCount: 19,
          commentCount: 0
        }
      ]
    }
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
