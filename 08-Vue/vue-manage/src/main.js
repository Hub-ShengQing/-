import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Form,
  FormItem,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Row,
  Col,
  Card,
  Progress,
  Table,
  TableColumn,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from 'axios'
import '@/api/mock.js'

Vue.config.productionTip = false
Vue.prototype.$http = http

Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Avatar)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Progress)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
