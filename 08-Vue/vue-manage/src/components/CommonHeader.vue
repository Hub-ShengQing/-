<!-- 头部 -->
<template>
  <div class="header-container">
    <div class="left-header">
      <!-- logo -->
      <a href="#/">
        <img src="@/assets/img/logo.png" alt="logo-img" class="logo-img" />
      </a>

      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="collapseChage">
        <i v-if="!collapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
      </div>
    </div>

    <div class="right-container">
      <!-- 用户头像 -->
      <el-avatar
        :src="avatarimg"
        fit="fill"
        icon="el-icon-user-solid"
      ></el-avatar>

      <!-- 用户名下拉菜单 -->
      <el-dropdown trigger="click">
        <span>
          {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu>
          <a href="#" target="_blank">
            <el-dropdown-item>项目仓库</el-dropdown-item>
          </a>
          <el-dropdown-item divided command="user">个人中心</el-dropdown-item>
          <el-dropdown-item divided command="loginout"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      username: '面包匠的狂欢节',
      avatarimg: require('@/assets/img/user-avator.jpg'),
    }
  },
  computed: {
    collapse() {
      return this.$store.state.collapse
    },
  },
  methods: {
    collapseChage() {
      this.$store.commit('handleCollapse')
    },
  },
}
</script>

<style lang="less" scoped>
.header-container {
  display: flex;
  height: 100%;
  justify-content: space-between;

  .left-header {
    display: flex;
    height: inherit;
    align-items: center;

    a {
      display: flex;
      height: inherit;
      align-items: center;

      .logo-img {
        height: 70%;
        margin: 0 30px;
      }
    }

    .collapse-btn {
      color: @color-green;
      font-size: 28px;
      cursor: pointer;

      .el-icon-s-unfold {
        color: @color-blue;
      }
    }
  }

  .right-container {
    display: flex;
    align-items: center;

    .el-dropdown {
      margin: 0 40px 0 10px;
    }
  }
}

.el-dropdown-menu__item {
  color: @color-dark;
  text-align: center;
  line-height: 2;
}

a {
  text-decoration: none;
}
</style>
