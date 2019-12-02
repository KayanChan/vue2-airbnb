<template>
  <div class="story-card">
    <div class="picture"></div>
    <div class="introduce">
      <span class="city">广州</span>
      <span class="sentence">房东说，欢迎体现你的“珠江之夜”</span>
    </div>
    <div class="count">
      <div class="icon"><SvgIcon icon-class="like"></SvgIcon>3</div>
      <div class="icon"><SvgIcon icon-class="comment"></SvgIcon>3</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StoryCard',
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
