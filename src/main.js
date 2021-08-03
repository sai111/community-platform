import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './assets/css/index.scss'

Vue.use(Element)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
