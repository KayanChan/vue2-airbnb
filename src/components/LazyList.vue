<template>
  <div class="lazy-list">
    <div class="lazy-render-list-item" v-for="item in listData" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'LazyList',
  // props: {
  //   listData: {
  //     type: 'Array'
  //   }
  // },
  data () {
    const count = 40
    let listData = []
    for (let i = 0; i < 40; i++) {
      listData.push(i)
    }
    return {
      count,
      listData
    }
  },
  mounted () {
    window.onscroll = () => {
      const maxScrollTop = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight
      const currentScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
      // 滚动底部
      if (maxScrollTop - currentScrollTop < 20) {
        const count = this.count
        for (let i = count; i < count + 40; i++) {
          this.listData.push(i)
        }
        this.count = count + 40
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .lazy-render-list {
    border: 1px solid #666;
  }
  .lazy-render-list-item {
    padding: 10px;
    color: #666;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
  }
</style>
