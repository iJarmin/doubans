// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import axios from 'axios'
import router from './router/index'
Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
//axios基本地址
axios.defaults.baseURL='https://bird.ioliu.cn/v1/?url=https://api.douban.com/'

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
