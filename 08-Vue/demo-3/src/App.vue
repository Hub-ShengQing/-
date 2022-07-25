<template>
  <div id="app">
    <h1>App 根组件</h1>
    <div>
      <!-- <a href="#/home">首页</a>
      <a href="#/movie">电影</a>
      <a href="#/about">关于</a> -->

      <router-link to="/home">首页</router-link>
      <router-link to="/movie">电影</router-link>
      <router-link to="/about">关于</router-link>

      <hr />

      <!-- 由 vue-router 提供的占位符 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
