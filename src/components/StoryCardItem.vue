<template>
<div class="story-card">
  <div class="picture"></div>
  <div class="introduce">
    <span class="city">{{storyData.city.name}}</span>
    <span class="sentence">{{storyData.summary}}</span>
  </div>
  <div class="count">
    <div class="icon">
      <SvgIcon icon-class="like"></SvgIcon>
      {{storyData.likeCount}}
    </div>
    <div class="icon">
      <SvgIcon icon-class="comment"></SvgIcon>
      {{storyData.commentCount}}
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'StoryCardItem',
  props: ['storyData'],
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
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
  .sentence {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
}
.count {
  display: flex;
  margin-top: 8px;
  font-size: 24px;
  .icon {
    margin-right: 10px;
  }
}
</style>
