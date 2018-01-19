import Vue from 'vue'
import Router from 'vue-router'
// 路由
import hotPlay from '../page/home/home.vue'
import articleDetail from '../page/articeDetail/articleDetail.vue'
import find from '../page/find/find.vue'
import findResult from '../page/findResult/findResult.vue'
import top250 from '../page/top250/top250.vue'
import login from '../page/login/login.vue'
import my from '../page/my/my.vue'

Vue.use(Router)

const router=new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      name:'hotPlay',
      path: '/hotPlay',
      component: hotPlay
    },
    {
      name:'find',
      path: '/find',
      component: find
    },
    {
      name:'my',
      path: '/my',
      component: my
    }
    ,
    {
      name:'login',
      path: '/',
      component: login
    }
    ,
    {
      name:'articleDetail',
      path: '/articleDetail',
      component: articleDetail
    },
    {
      name:'top250',
      path: '/top250',
      component: top250
    }
    ,
    {
      path: '/findResult',
      name:'findResult',
      component: findResult
    }
  ]
})
console.log(router.push)
router.beforeEach((to, from, next) => {
  //跳转至上述3个页面
  // const nextRoute=['hotPlay','find','my','articleDetail','top250','findResult']
  const nextRoute=['login']
  if (nextRoute.indexOf(to.name) < 0) {
      //未登录
      if(!sessionStorage.flag){
        router.push({name:'login'})
      }
  }

  if(to.name != 'login' && from.name !=undefined && !sessionStorage.flag){

  }else{
    next();
  }

});
export default router

