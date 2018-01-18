// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
//axios基本地址
axios.defaults.baseURL='https://bird.ioliu.cn/v1/?url=https://api.douban.com/'
// 路由
import hotPlay from './page/home/home.vue'
import articleDetail from './page/articeDetail/articleDetail.vue'
import find from './page/find/find.vue'
import findResult from './page/findResult/findResult.vue'
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
    ,
    {
      path: '/articleDetail',
      component: articleDetail
    }
    ,
    {
      path: '/findResult',
      name:'findResult',
      component: findResult
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {                                        //如果未匹配到路由
    // from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    alert(111111111111111)
  } else {
    next();                                                                            //如果匹配到正确跳转
  }
});
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
