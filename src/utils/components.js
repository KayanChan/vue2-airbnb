import Vue from 'vue'

const requireComponent = require.context(
  // 其组件目录的相对路径
  '@/components/Base',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

export default requireComponent
