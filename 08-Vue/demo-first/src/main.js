import Vue from 'vue'
// 导入根组件
import App from './App.vue'
// 1、导入需要全局注册的组件
// 2、注册全局组件
import Count from '@/components/Count.vue'
Vue.component('MyCount', Count)

Vue.config.productionTip = false

new Vue({
  // 用 render 指定组件，渲染到 index.html
  render: h => h(App),
}).$mount('#app')

// .$mount('#app') 等价于 el:
