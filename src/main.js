// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import axios from 'axios'
import detail from ''
Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
//axios基本地址
axios.defaults.baseURL='https://bird.ioliu.cn/v1/?url=https://api.douban.com/'
// 路由
import hotPlay from './page/home/home.vue'
const find={template:'<div>2222222</div>'}
const my={template:'<div>1111111133311111</div>'}
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/hotPlay',
      component: hotPlay
    },
    {
      path: '/find',
      component: find
    },
    {
      path: '/my',
      component: my
    }
  ]
})
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
