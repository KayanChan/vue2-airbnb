<template>
  <div class="help-center">
    <div class="top">
      <div class="title">
        <span class="logo"></span>
        <span>帮助中心</span>
      </div>
      <div class="menu">菜单</div>
    </div>
    <div class="wrapper">
      <div class="tip">登录获取预订等方面的帮助</div>
      <div class="actions">
        <pub-btn class="register" :isAntiColor="true">注册</pub-btn>
        <pub-btn class="login">登录</pub-btn>
      </div>
      <div class="hot-article">
        <div class="title">最热文章</div>
        <ul class="article-list">
          <li>
            <span class="icon"></span>
            <div class="qAndA">
              <div class="question">如何重置或更改我的密码？</div>
              <div class="answer">如果您忘记了密码，或者无法登录爱彼迎账号，请前往重置密码页面。 输入与您的爱彼迎账号关联的电子邮件地址，然后点击发送重置链接，您将收到一封电子邮件，其中提供了用于重置密码的链接。 如果您知道当前密码但希望修改密码，请按照以下步骤操作： 登录您的账号，进入安全页面 在修改密码下方输…</div>
              <div class="more">阅读更多&gt;</div>
            </div>
          </li>
          <li>
            <span class="icon"></span>
            <div class="qAndA">
              <div class="question">如何重置或更改我的密码？</div>
              <div class="answer">如果您忘记了密码，或者无法登录爱彼迎账号，请前往重置密码页面。 输入与您的爱彼迎账号关联的电子邮件地址，然后点击发送重置链接，您将收到一封电子邮件，其中提供了用于重置密码的链接。 如果您知道当前密码但希望修改密码，请按照以下步骤操作： 登录您的账号，进入安全页面 在修改密码下方输…</div>
              <div class="more">阅读更多&gt;</div>
            </div>
          </li>
          <li>
            <span class="icon"></span>
            <div class="qAndA">
              <div class="question">如何重置或更改我的密码？</div>
              <div class="answer">如果您忘记了密码，或者无法登录爱彼迎账号，请前往重置密码页面。 输入与您的爱彼迎账号关联的电子邮件地址，然后点击发送重置链接，您将收到一封电子邮件，其中提供了用于重置密码的链接。 如果您知道当前密码但希望修改密码，请按照以下步骤操作： 登录您的账号，进入安全页面 在修改密码下方输…</div>
              <div class="more">阅读更多&gt;</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 帮助
  name: 'Help',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.help-center {
  .top {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    border-bottom: 1px solid #ebebeb;
  }
  .logo {
    display: inline-block;
    margin-right: 32px;
    width: 64px;
    height: 64px;
    background-color: #ff5a5f;
  }
  .title {
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    font-size: 32px;
    color: #222;
  }
  .menu {
    .ignore-border-1px(#222);
    padding: 14px 30px;
    border-radius: 16px;
    color: #222;
    font-size: 28px;
  }
}
.wrapper {
  padding: 48px;
  .tip {
    margin-bottom: 48px;
    font-size: 64px;
    font-weight: bold;
  }
  .actions {
    margin-bottom: 112px;
    height: 48px;
  }
  .register,
  .login {
    display: inline-block;
    margin-right: 16px;
    width: 152px;
  }
}
.hot-article {
  .title {
    margin: 32px 0;
    font-size: 48px;
    color: @primaryTextColor;
    font-weight: bold;
  }
}
.article-list {
  li {
    display: flex;
    margin: 32px 0;
  }
  .icon {
    margin-right: 16px;
    width: 48px;
    height: 48px;
    background-color: @functionColor;
  }
  .qAndA {
    width: 590px;
  }
  .question {
    font-size: 36px;
    font-weight: bold;
  }
  .answer {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin-top: 16px;
    font-size: 32px;
    line-height: 44px;
    width: 100%;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .more {
    margin-top: 32px;
    color: @functionColor;
  }
}
</style>
