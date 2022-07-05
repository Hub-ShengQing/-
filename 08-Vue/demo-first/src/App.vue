<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>年后的的的</h3>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    你好---- {{ uername }} ------

    <button @click="changeName">修改用户名</button>
    <div>
      <Test></Test>
      <Left :msg="message" :user="uername"></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// @ 指向 src
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Test from '@/components/Test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Left,
    Right,
    Test
  },
  // 组件中 data 必须是函数
  data() {
    return {
      uername: '大冶',
      message: '二恶'
    }
  },
  computed: {

  },
  methods: {
    changeName() {
      this.uername = '天工'
    }
  },
  // 侦听器
  watch: {

  },
  // 过滤器
  filters: {

  }
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
