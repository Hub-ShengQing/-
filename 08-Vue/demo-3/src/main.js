import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'

// 导入路由模块
import router from '@/router'
// 等价于 import router from '@/router'
// 导入 bootstrap 样式
// import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false
// axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// Vue.prototype.$http = axios

new Vue({
  render: (h) => h(App),
  // 挂载路由实例对象
  router
}).$mount('#app')
