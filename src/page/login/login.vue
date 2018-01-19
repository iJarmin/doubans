<template>
  <div id="login">
    <div class="title">
      <span>欢迎来到仿豆瓣</span>
    </div>
    <div class="main">
      <form @submit.prevent="submitData($event)" action="">
        <div class="listItem">
          <input name="username" type="text" placeholder="用户名">
        </div>
        <div class="listItem">
          <input name="password" type="password" placeholder="密码">
        </div>
        <input type="submit" value="登录">
      </form>
    </div>
  </div>
</template>

<script>
  import list from '../../components/list.vue'
  import api from '../../api/api'
  import Vue from 'vue'
  import axios from 'axios'
  import jq from '../../../node_modules/jquery/dist/jquery'
  import  { LoadingPlugin } from 'vux'
  import formJson from '../../plugin/formJson'
  Vue.use(LoadingPlugin)
  import  { ToastPlugin } from 'vux'
  Vue.use(ToastPlugin)
  export default {
    name: 'login',
    data(){
      return {

      }
    },
    mounted:function () {
    },
    methods:{
      submitData:function (e) {
        var data=formJson.formJson(jq(e.currentTarget).serializeArray());
        if(data.username==="admin" && data.password==="admin"){
          sessionStorage.flag=true;
          this.$router.push('/hotPlay')
        }else{
          this.$vux.toast.show({
            text: '用户名或密码错误',
            type:'warn'
          })
        }
      }
    }
  }

</script>

<style>
  @import "css/login.css";
</style>
