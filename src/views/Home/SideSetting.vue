<template>
  <div class="side-setting-wrapper">
    <div class="top">
      <img class="close" src="https://z1.muscache.cn/pictures/3bddaee4-479e-49cc-a7d2-5f09a265e90c.jpg" alt="" @click="handleClickClose">
      <div class="recovery">恢复默认</div>
    </div>
    <div class="title">设置语言与货币</div>
    <div class="control">
      <div class="label">选择语言</div>
      <select>
        <option>aaa</option>
      </select>
    </div>
    <div class="control">
      <div class="label">选择货币</div>
      <select>
        <option>aaa</option>
      </select>
    </div>
    <pub-btn class="save">保存</pub-btn>
  </div>
</template>
<script>
import PubBtn from '@/components/Base/PubBtn'
export default {
  name: 'SideSetting',
  components: {
    PubBtn
  },
  data () {
    return {}
  },
  methods: {
    handleClickClose: function () {
      this.$emit('listenSettingClose')
    }
  }
}
</script>
<style lang="less" scoped>
.side-setting-wrapper {
  box-sizing: border-box;
  padding: 48px;
  width: 100%;
  height: 100%;
  background-color: #FFF;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .close {
    width: 32px;
    height: 32px;
  }
  .recovery {
    color: @functionColor;
  }
}
.title {
  font-size: 48px;
  margin-top: 72px;
}
.control {
  margin-top: 60px;
  .label {
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: bold;
    color: @primaryTextColor;
  }
  select {
    margin-bottom: 16px;
    padding: 22px 30px;
    box-sizing: border-box;
    width: 100%;
    line-height: 48px;
    color: @primaryTextColor;
    border-color: #ededed;
    border-radius: 8px;
    font-size: 32px;
    outline: none;
  }
}
.save {
  margin-top: 60px;
}
</style>
