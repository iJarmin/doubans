<template>
  <div id="top250">
    <div class="FirstTitle">
      <div @click="$router.back(-1)">
        <img src="../../../static/images/grayGuide.png" alt="">
      </div>
      <span>豆瓣top250</span>
      <div style="visibility: hidden">
        <img src="../../../static/images/grayGuide.png" alt="">
      </div>
    </div>
    <nav>
      <ul>
        <li @click="tab(index)" :class="active==index? 'current':''" v-for="(v,index) in tabList">{{ v }}</li>
      </ul>
    </nav>
    <list v-bind:list="parentList"></list>
    <footers></footers>
  </div>
</template>

<script>
  import list from '../../components/list.vue'
  import api from '../../api/api'
  import Vue from 'vue'
  import axios from 'axios'
  import footers from '../../components/footer.vue'
  import  { LoadingPlugin } from 'vux'
  Vue.use(LoadingPlugin)
  export default {
    name: 'top250',
    data(){
      return {
        parentList:[],
        tabList:['Top1-50','51-100','101-150','151-200','201-250'],
        active:0
      }
    },
    components:{
      list,
      footers
    },
    mounted:function () {
      this.list()
    },
    methods:{
      //初始化数据
      list:function (index) {
        var that=this;
        this.$vux.loading.show({
          text: 'Loading'
        })
        axios.get(api.api.Top250,{
          params:{
            count:50,
            start:index
          }
        }).then(function (res) {
          console.log(res);
          that.$vux.loading.hide()
          that.parentList=res.data.subjects
        }).catch(function (error) {
          console.log(error);
        })
      },
      //tab栏
      tab:function (index) {
        this.active=index
        this.list(parseInt(index)*50)
      }
    }
  }

</script>

<style>
  @import "css/top250.css";
</style>
