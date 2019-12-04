<template>
  <div class="side-content-wrapper">
    <div class="user-login">
      <router-link class="login" to="/auth">注册/登录</router-link>
      <img class="avatar" src="https://z1.muscache.cn/pictures/f904acba-6811-4d87-be3e-4656a3423135.jpg" alt="">
    </div>
    <ul class="actions">
      <li>
        <div class="icon"></div>
        <div class="text">下载APP</div>
      </li>
      <li>
        <div class="icon"></div>
        <div class="text">语言与货币</div>
      </li>
      <li>
        <div class="icon"></div>
        <div class="text">帮助</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeSideContent',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.side-content-wrapper {
  padding: 64px 48px 0 48px;
}
.user-login {
  display: flex;
  margin-bottom: 74px;
  justify-content: space-between;
  align-items: center;
  .login {
    text-decoration: none;
    font-size: 28px;
    color: @functionColor;
  }
  .avatar {
    width: 96px;
    height: 96px;
  }
}
.actions {
  li {
    display: flex;
    align-items: center;
    margin-bottom: 72px;
    font-size: 28px;
    color: @secondTextColor;
  }
  .icon {
    margin-right: 32px;
    width: 40px;
    height: 40px;
    background-color: @functionColor;
  }
}
</style>
