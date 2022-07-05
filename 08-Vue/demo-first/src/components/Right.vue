<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr />

    <MyCount :init="6"></MyCount>
    <p>Right 的 count 值：{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      count: 0
    }
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
