<template>
  <div class="home-index" :class="{'show-site-content': isShowSiteContent || isSettingFixed}">
    <div class="site-content" v-show="isShowSiteContent">
      <div class="content-mask" @click="isShowSiteContent = false"></div>
      <div class="main-content">
        <home-side-content v-on:listenSettingClick="isSettingFixed = true"></home-side-content>
      </div>
    </div>
    <div class="site-content" v-show="isSettingFixed">
      <home-side-setting v-on:listenSettingClose="isSettingFixed = false"></home-side-setting>
    </div>
    <home-banner></home-banner>
    <div class="img-logo">
      <!-- <img class="img" v-bind:src="imgLogo" alt="" /> -->
    </div>
    <div class="img-user" @click="isShowSiteContent = !isShowSiteContent"><img class="img" v-bind:src="imgUser" alt="" /></div>
    <home-search :isSearchInputFixed="isSearchInputFixed"></home-search>
    <home-content></home-content>
    <div class="selector">
      <select>
        <option v-for="language in languages" :key="language.id" :value="language.id">{{language.name}}</option>
      </select>
      <select>
        <option v-for="currency in currencies" :key="currency.id" :value="currency.id">{{currency.name}}</option>
      </select>
    </div>
    <ul class="routine-link">
      <li @click="goAuth">注册/登录</li>
      <li></li>
      <li @click="goHelp">帮助</li>
      <li @click="goSitemap">网站地图</li>
      <li @click="goTerms">条款</li>
      <li @click="goPrivacyPolicy">隐私政策</li>
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
import HomeSideContent from '@/views/Home/SideContent'
import HomeSideSetting from '@/views/Home/SideSetting'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeSearch,
    HomeContent,
    HomeFooter,
    HomeSideContent,
    HomeSideSetting
  },
  data () {
    return {
      imgLogo: imgLogo,
      imgUser: imgUser,
      isShowSiteContent: false,
      searchInputOffsetTop: 0,
      isSearchInputFixed: false,
      isSettingFixed: false
    }
  },
  computed: {
    languages () {
      return this.$store.state.app.languages
    },
    currencies () {
      return this.$store.state.app.currencies
    }
  },
  mounted () {
    this.$store.dispatch('getLanguages')
    this.$store.dispatch('getCurrencies')
    this.searchInputOffsetTop = document.getElementsByClassName('search-input-wrapper')[0].offsetTop
  },
  created () {
    let _this = this
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      document.querySelector('.home-index').scrollTop
      if (_this.searchInputOffsetTop && _this.searchInputOffsetTop <= scrollTop) {
        _this.isSearchInputFixed = true
      } else {
        _this.isSearchInputFixed = false
      }
    }, true)
  },
  destroyed () {
    window.removeEventListener('scroll', function () {}, false)
  },
  methods: {
    goAuth: function () {
      this.$router.push({path: '/auth'})
    },
    goHelp: function () {
      this.$router.push({path: '/help'})
    },
    goSitemap: function () {
      this.$router.push({path: '/sitemap'})
    },
    goTerms: function () {
      this.$router.push({path: '/terms'})
    },
    goPrivacyPolicy: function () {
      this.$router.push({path: '/privacyPolicy'})
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
.show-site-content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.site-content {
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  .content-mask {
    width: 25%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.58);
  }
  .main-content {
    width: 75%;
    height: 100%;
    background-color: #FFF;
  }
}
.img {
  width: 64px;
  height: 64px;
  z-index: 1;
}
.img-logo {
  position: absolute;
  left: 64px;
  top: 64px;
  background-color: #ff5a5f;
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
.selector {
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
