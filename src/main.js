import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'


import axios from 'axios'
Vue.prototype.axios = axios

axios.defaults.baseURL = 'http://localhost:3000/'

import router from './router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
