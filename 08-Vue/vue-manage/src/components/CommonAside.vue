<!-- 侧边导航栏 -->
<template>
  <el-menu
    default-active="activeIndex"
    class="el-menu-vertical-demo"
    text-color="#2F2F2F"
    active-text-color="#53D99D"
    :collapse="collapse"
    router
  >
    <!-- 没有子菜单的目录 -->
    <el-menu-item
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
      :route="item.path"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 含有子菜单的目录 -->
    <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="subitem in item.children"
        :index="subitem.path"
        :key="subitem.path"
      >
        <el-menu-item :index="subitem.path" :route="subitem.path">
          <i :class="subitem.icon"></i>
          <span slot="title">{{ subitem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          icon: 'el-icon-house',
          path: '/',
          label: '系统首页',
        },
        {
          icon: 'el-icon-shopping-cart-full',
          path: '/goods',
          label: '商品管理',
        },
        {
          icon: 'el-icon-user',
          path: '/user',
          label: '用户管理',
        },
        {
          icon: 'el-icon-star-off',
          label: '其他功能',
          path: '/other',
          children: [
            {
              icon: 'el-icon-help',
              path: '/permission',
              label: '权限测试',
            },
            {
              icon: 'el-icon-present',
              path: '/donate',
              label: '鼓励作者',
            },
          ],
        },
      ],
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children)
    },
    hasChildren() {
      return this.menu.filter((item) => item.children)
    },
    collapse() {
      return this.$store.state.collapse
    },
  },
  methods: {
    menuClick() {
      console.log('12132')
    },
  },
}
</script>

<style lang="less" scoped>
.el-menu {
  text-align: center;
  line-height: 1.75;

  i {
    margin-right: 20px;
  }
}
</style>
