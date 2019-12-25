# vue2-airbnb

仿[爱彼迎](https://www.airbnb.cn/)的`Vue`项目

基于 vue2 + webpack + vueRouter

[在线效果](https://kayanchan.github.io/project-display/vue2-airbnb/#/home)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目目的
* 搭建一个完整的项目骨架
* 使用vw实现移动端适配

# 前期准备
1. [x] 配置`.postcssrc.js`([参考](https://segmentfault.com/a/1190000014185590#articleHeader8))
2. [x] 增加`viewport-units-buggyfill`配置，适配了低版本安卓机型
3. [x] `Less`配置
4. [x] `svg-sprite-loader`配置([参考](https://www.jianshu.com/p/4a03e297c2f0))
5. [x] `vuex`配置
6. [x] 添加`normalize.css`(跨浏览器的高度一致性)
7. [x] 添加`babel-polyfill`(ES6转ES5)
8. [x] 搭建目录

# 目录
* [x] apis - 接口
* [x] assets - 静态资源
* [x] components - 组件
* [x] icons - iconfont
* [x] router - 路由
* [x] store - vuex
* [x] styles - 样式
* [x] utils - 工具库
* [x] views - 页面

# styles
* `normalize.css`： 样式重置统一
* `styles/*.less`： 公共样式(UI-Key、工具样式)
* `<style></style>`: 局部样式

# component
* [slot插槽分发内容](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9): 向一个组件传递内容
* 父组件给子组件传值：子组件创建`props`接受父组件传递过来的值； 父组件使用子组件的时候，绑定变量传值
* 子组件给父组件传值：父组件使用子组件的时候，绑定监听事件；子组件值发生改变，通过`this.$emit`事件通知父组件
* 子组件**不可以**直接修改父组件传递过来`props`的变量的值

# 困难
* [ ] 含单个进度条的分页器与图片滚动的时间对不上
