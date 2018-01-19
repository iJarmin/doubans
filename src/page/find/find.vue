<template>
  <div id="find">
    <div>
      <nav>
        <input v-on:input="search" placeholder="电影/影人" type="text">
        <img @click="find" src="../../../static/images/search.png" alt="">
      </nav>
      <img style="width: 100%;margin-top: 0.4rem;" src="../../../static/images/adv_02.jpg" alt="">
      <div class="top">
        <div class="title">
          豆瓣Top 250
        </div>
        <ul>
          <li @click="$router.push('/articleDetail?id='+v.id)" v-for="(v,index) in list">
            <div class="left">
              <span>{{ index }}</span>
            </div>
            <div class="middle">
              <img :src="v.images.small" alt="">
            </div>
            <div class="right">
              <div class="title">{{ v.title }}</div>
              <div class="down">
                <div class="starts">

                  <div style="overflow: hidden;">
                    <div style="float: left;" class="score">
                      <div class="NotActive">
                        <img src="../../../static/images/starts.png" alt="">
                        <img src="../../../static/images/starts.png" alt="">
                        <img src="../../../static/images/starts.png" alt="">
                        <img src="../../../static/images/starts.png" alt="">
                        <img src="../../../static/images/starts.png" alt="">
                      </div>
                      <div :style="{'width': Math.floor(parseFloat(v.rating.average))*10+'%' }" class="active">
                        <div style="width: 1.25rem;">
                          <img src="../../../static/images/startsActive.png" alt="">
                          <img src="../../../static/images/startsActive.png" alt="">
                          <img src="../../../static/images/startsActive.png" alt="">
                          <img src="../../../static/images/startsActive.png" alt="">
                          <img src="../../../static/images/startsActive.png" alt="">
                        </div>
                      </div>
                    </div>
                    <span class="text" style="float: left;margin-left: 0.1rem;margin-top: 0.01rem;">{{ v.rating.average }} &nbsp;&nbsp; {{ v.year }}年</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="bottom">
          <span @click="$router.push('/top250')">全部250部</span>
        </div>
      </div>
      <footers></footers>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import {Group,Cell,AlertPlugin,LoadingPlugin} from 'vux'
  import api from '../../api/api'
  import footers from '../../components/footer.vue'
  Vue.use(AlertPlugin)
  Vue.use(LoadingPlugin)
  export default {
    name:'find',
    data() {
      return {
        searchText:'',
        list:[]
      }
    },
    components:{
      Group,
      Cell,
      AlertPlugin,
      footers
    },
    mounted:function () {
      this.topList()
    },
    methods:{
      //监听input搜索
      search:function (e) {
        this.searchText=e.currentTarget.value
      },
      //进行搜索验证
      find:function () {
        if(!this.searchText){
          this.$vux.alert.show({
            title: '此处不能为空',
            content: '',
            onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              console.log('Plugin: I\'m hiding')
            }
          })
        }else{
//          this.$router.push('/findResult?text='+text)
          this.$router.push({name:'findResult',query:{text:this.searchText}})
        }
      },
      //top250
      topList:function () {
        var that=this;
        this.$vux.loading.show({
          text: 'Loading'
        })
        axios.get(api.api.Top250,{
          params:{
            count:4
          }
        }).then(function (res) {
          that.$vux.loading.hide()

          that.list=res.data.subjects
        }).catch(function (error) {
          console.log(error);
        })
      }
    }
  }
</script>

<style>
  @import "css/find.css";
</style>
