<template>
  <el-container>
    <el-header>
      <CommonHeader></CommonHeader>
    </el-header>
    <el-container>
      <el-aside style="width: auto">
        <CommonAside></CommonAside>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonAside from '@/components/CommonAside.vue'

export default {
  name: 'homePage',
  components: {
    CommonHeader,
    CommonAside,
  },
}
</script>

<style lang="less" scoped>
.el-header {
  height: @height-header;
  padding: 0;
  border-bottom: 2px solid @color-light-gray;
  color: @color-dark;
  background-color: @color-white;
}

.el-aside {
  overflow: hidden;
  margin-top: 50px;
  border-top: 2px solid @color-light-gray;
}

.el-main {
  background-color: #f0f5f5;
}
</style>
