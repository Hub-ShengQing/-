// 1. 导入 Vue 和 VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Com-Home.vue'
import Movie from '@/components/Com-Movie.vue'
import About from '@/components/Com-About.vue'
import Main from '@/components/Com-Main.vue'
import Login from '@/components/Com-Login.vue'

// 2. 安装 VueRouter 插件
Vue.use(VueRouter)

// 3. 创建路由的实例
const router = new VueRouter({
  // 路由的对应关系
  routes: [
    // 重定向的路由规则
    { path: '/', redirect: '/home' },
    // 路由规则
    { path: '/home', component: Home },
    { path: '/movie', component: Movie },
    { path: '/about', component: About },
    { path: '/main', component: Main },
    { path: '/login', component: Login }
  ]
})

// 全局前置守卫
router.beforeEach(function (to, from, next) {
  if (to.path === '/main') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    // 表示放行
    next()
  }
})

// 4. 共享路由的实例
export default router
