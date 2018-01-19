<template>
  <div id="findResult">
    <div>
      <nav>
        <div @click="$router.back(-1)">
          <img src="../../../static/images/grayGuide.png" alt="">
        </div>
        <span>{{ detail.title }}</span>
        <div style="visibility: hidden">
          <img src="../../../static/images/grayGuide.png" alt="">
        </div>
      </nav>
      <ul>
        <li @click="$router.push('/articleDetail?id='+v.id)" v-for="(v,index) in list">
          <div class="left">
            <img :src="v.images.small" alt="">
          </div>
          <div class="right">
            <div class="title">{{ v.title }}</div>
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
                <span class="text" style="float: left;margin-left: 0.1rem;margin-top: 0.01rem;">{{ v.rating.average }}</span>
              </div>
            </div>
            <span>年份：{{ v.year }}</span>
            <span>类型：{{ v.genres.join('、') }}
            </span>
          </div>
        </li>
      </ul>
      <footers></footers>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import api from '../../api/api'
  import getUrl from '../../plugin/getUrl'
  import  { LoadingPlugin } from 'vux'
  import footers from '../../components/footer.vue'
  Vue.use(LoadingPlugin)
//  import {Group,Cell,AlertPlugin} from 'vux'
//  Vue.use(AlertPlugin)
  export default {
    name:'findResult',
    data() {
      return {
        detail:{},
        list:[]
      }
    },
    components:{
      footers
    },
    mounted:function () {
      this.result()
    },
    methods:{
      result:function () {
        var that=this;
        this.$vux.loading.show({
          text: 'Loading'
        })
        axios.post(api.api.search,{
            q:that.$route.query.text
        }).then(function (res) {
          that.$vux.loading.hide()
          that.detail=res.data
          that.list=res.data.subjects
        }).catch(function (error) {
          console.log(error);
        })
      }
    }
  }
</script>

<style>
  @import "css/findResult.css";
</style>
