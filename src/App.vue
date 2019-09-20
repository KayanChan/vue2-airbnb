<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
img {
  content: normal !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
