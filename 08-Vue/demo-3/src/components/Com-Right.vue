<template>
  <div class="Right-Box">
    <h1>Right 组件</h1>
    <body>
      <button @click="postInfo">发起请求</button>
    </body>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  methods: {
    async postInfo () {
      const { data: res } = await this.$http.post('/api/post', {
        name: 'zs',
        age: 20
      })
      console.log(res)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Right-Box {
  flex: 1;
  background-color: rgb(223, 157, 34);
  min-height: 200px;
}
</style>
