import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main/Main.vue'),
      },
      {
        path: '/goods',
        name: 'Goods',
        component: () => import('@/views/Goods/Goods.vue'),
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/User/User.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

// 配置全局前置守卫
router.beforeEach(function (to, from, next) {
  const token = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
