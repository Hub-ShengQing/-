import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserInfo from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/MyLogin' },
    { path: '/MyLogin', component: Login },
    {
      path: '/MyHome',
      component: Home,
      redirect: '/MyHome/users',
      children: [
        { path: 'users', component: Users },
        { path: 'rights', component: Rights },
        { path: 'goods', component: Goods },
        { path: 'orders', component: Orders },
        { path: 'settings', component: Settings },
        { path: 'userinfo/:id', component: UserInfo }
      ]
    }
  ]
})

router.beforeEach(function (to, from, next) {
  if (to.path == '/MyHome') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/MyLogin')
    }
  } else { 
    next()
  }
})

export default router
