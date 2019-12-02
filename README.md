# vue2-airbnb

> 仿[爱彼迎](https://www.airbnb.cn/)的`Vue`项目
> 基于 vue2 + webpack + vueRouter

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
1. [ ] 配置`.postcssrc.js`([参考](https://segmentfault.com/a/1190000014185590#articleHeader8))
2. [ ] 增加`viewport-units-buggyfill`配置，适配了低版本安卓机型
3. [ ] `Less`配置
4. [ ] `svg-sprite-loader`配置([参考](https://www.jianshu.com/p/4a03e297c2f0))
5. [ ] `vuex`配置
6. [ ] 添加`normalize.css`(跨浏览器的高度一致性)
7. [ ] 添加`babel-polyfill`(ES6转ES5)
8. [ ] 搭建目录

# 目录
* apis - 接口
* assets - 静态资源
* components - 组件
* icons - iconfont
* router - 路由
* store - vuex
* styles - 样式
* utils - 工具库
* views - 页面

# styles
* `normalize.css`： 样式重置统一
* `styles/*.less`： 公共样式(UI-Key、工具样式)
* `<style></style>`: 局部样式