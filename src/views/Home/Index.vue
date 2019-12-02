<template>
  <div class="home-index">
    <div class="img-logo"><img class="img" v-bind:src="imgLogo" alt="" /></div>
    <div class="img-user"><img class="img" v-bind:src="imgUser" alt="" /></div>
    <home-banner></home-banner>
    <home-search></home-search>
    <home-content></home-content>
    <div class="language-selector">
      <select>
        <option value="A">中文(简体)</option>
        <option value="B">中文(繁体)</option>
        <option value="C">中文(简体)</option>
      </select>
      <select>
        <option value="A">CNY人民币</option>
        <option value="B">USD美元</option>
        <option value="C">JPY日元</option>
      </select>
    </div>
    <ul class="routine-link">
      <li>注册/登录</li>
      <li>下载应用</li>
      <li>帮助</li>
      <li>网站地图</li>
      <li>条款</li>
      <li>隐私政策</li>
    </ul>
    <div class="website-record">备案信息备案信息备案信息备案信息备案信息备案信息备案信息备案信息</div>
    <home-footer></home-footer>
  </div>
</template>
<script>
import imgLogo from '@/assets/logo.png'
import imgUser from '@/assets/user.jpg'
import HomeBanner from '@/views/Home/Banner'
import HomeSearch from '@/views/Home/Search'
import HomeContent from '@/views/Home/Content'
import HomeFooter from '@/views/Home/Footer'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeSearch,
    HomeContent,
    HomeFooter
  },
  data () {
    return {
      imgLogo: imgLogo,
      imgUser: imgUser
    }
  }
}
</script>
<style lang="less" scoped>
.home-index {
  position: relative;
  box-sizing: border-box;
  padding-bottom: 112px;
  width: 100%;
  min-height: 100%;
}
.img {
  width: 64px;
  height: 64px;
  z-index: 99;
}
.img-logo {
  position: absolute;
  left: 64px;
  top: 64px;
  .img
}
.img-user {
  position: absolute;
  right: 64px;
  top: 64px;
  border-radius: 50%;
  overflow: hidden;
  .ignore-border-1px(#FFF);
  .img
}
.language-selector {
  margin: 0 48px 24px 48px;
  padding-top: 32px;
  border-style: solid;
  .ignore-border-top-1px(#EDEDED);
  display: flex;
  justify-content: space-between;
  select {
    padding: 12px 30px;
    width: 320px;
    line-height: 48px;
    color: @primaryTextColor;
    border-color: #ededed;
    border-radius: 8px;
    font-size: 32px;
    outline: none;
  }
}
.routine-link {
  margin: 0 48px 24px 48px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    width: 50%;
    height: 88px;
    line-height: 88px;
    font-size: 28px;
    color: @primaryTextColor;
  }
}
.website-record {
  margin: 0 48px 24px 48px;
  color: @secondTextColor;
  font-size: 24px;
}
</style>
