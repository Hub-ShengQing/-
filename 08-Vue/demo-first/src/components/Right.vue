<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr />

    <MyCount :init="6"></MyCount>
    <p>Right 的 count 值：{{ count }}</p>
    <button @click="add">增加</button>
    <hr>
    <p>收到的消息：{{ msgFromLeft }}</p>
  </div>
</template>

<script>
import bus from './eventBus.js'

export default {
  data() {
    return {
      // 子组件的数据，将传给父组件
      count: 0,

      // 兄弟组件的数据共享，步骤二
      msgFromLeft: ''
    }
  },
  methods: {
    add() {
      this.count++;

      // 修改数据时，通过 $emit() 触发自定义事件
      this.$emit('numChange', this.count)
    }
  },
  created() {
    bus.$on('search', val =>
      this.msgFromLeft = val
    )
  }
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
