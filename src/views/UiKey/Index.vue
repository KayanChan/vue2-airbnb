<template>
  <div>
    <h3>Button</h3>
    <button :class="$style.button">xxx</button>
  </div>
</template>
<script>
export default {
  name: 'UiKey',
  data () {
    return {}
  }
}
</script>
<style module lang="less">
  @svg 1px-border {
    width: 4px;
    height: 4px;
    @rect {
      fill: transparent;  /* content为透明 */
      width: 100%;  /* 宽度为4px * 100% */
      height: 100%;  /* 高度为4px * 100% */
      stroke-width: 25%;  /* 边框宽度 4px * 25%(即1px) */
      stroke: var(--color, black);  /* 颜色 */
    }
  }

  #real-1px {
    height: 50px;
  }

  #real-1px {
    border: 1px solid;
    border-image: svg(1px-border param(--color red)) 1 stretch;
  }
  :global(.button) {
    padding: 6px 12px;
    line-height: 20px;
  }
</style>
