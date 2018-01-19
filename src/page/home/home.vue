<template>
  <div id="home">
    <div class="main">
      <div class="tab">
        <ul>
          <li v-for="(v,index) in tab" :class="index==tabActive? 'current':''" @click="select(index)">{{ v }}</li>
        </ul>
      </div>
      <ul id="main">
        <li @click="$router.push('/articleDetail?id='+v.id)" v-for="(v,index) in lists">
          <a href="javascript:;">
            <div class="left">
              <img :src="v.images.small" alt="">
            </div>
            <div class="right">
              <div class="title">{{ v.original_title }}</div>
              <div class="starts">

                <div style="overflow: hidden;"><span style="float: left;">评分：</span>
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
                  <span style="float: left;margin-left: 0.1rem;margin-top: 0.01rem;">{{ v.rating.average }}</span>
                </div>
              </div>
              <div class="des">
                <span>类型：{{ v.genres.join(',') }}</span>
                <span>年份：{{ v.year }}</span>
                <span>演员：
                  <template v-for="(v2,index2) in v.casts">{{ v2.name+(index2>=v.casts.length-1? '':' , ') }}</template>
                </span>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <footers></footers>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import  { LoadingPlugin } from 'vux'
  import Swiper from 'swiper';
  import footers from '../../components/footer.vue'
  Vue.use(LoadingPlugin)
  export default {
    name: 'home',
    data() {
      return {
        lists: [],
        tab: ['即将上映', '正在热映'],
        tabActive: 0,
        getUrl: ['/v2/movie/in_theaters', '/v2/movie/coming_soon'],
        detail:{
          imgs:[
            '../../../static/images/banner_02.jpg'
          ]
        }
      }
    },
    components:{
      footers
    },
    mounted: function () {
      this.list(this.getUrl[1])
    },
    methods: {
      //初始化列表
      list: function (url) {
        var that = this;
        this.$vux.loading.show({
          text: 'Loading'
        })
        axios.get(url, {}).then(function (res) {
          that.$vux.loading.hide()
          that.lists = res.data.subjects
        }).catch(function (err) {
          console.log(err);
        })
      },
      //tab栏选择
      select: function (index) {
        this.tabActive = index
        if (index === 0) {
          this.list(this.getUrl[1])
        } else {
          this.list(this.getUrl[0])
        }
      }
    }
  }
</script>

<style>
  @import '../../../node_modules/swiper/dist/css/swiper.min.css';
  @import "css/home.css";
</style>
