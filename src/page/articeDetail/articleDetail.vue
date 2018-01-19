<template>
  <div id="articleDetail">
    <div>
      <nav>
        <div @click="$router.back(-1)">
          <img src="../../../static/images/leftGuide.png" alt="">
        </div>
        <div class="title">
          <img src="../../../static/images/cinema.png" alt="">
          <span>电影</span>
        </div>
        <div>
          <img src="../../../static/images/share.png" alt="">
        </div>
      </nav>
      <div class="poster">
        <img :src="detail.images.small" alt="">
      </div>
      <div class="desc">
        <div class="left">
          <div class="title">{{ detail.title }}</div>
          <div class="info">
            <span>
              <template>
                {{ detail.year }}
              </template>
              <template v-for="(v,index) in detail.genres">
                /{{ v }}
              </template>
            </span>
            <span>原名：{{ detail.original_title }}</span>
            <span>上映时间：-------(中国大陆)</span>
            <span>片长：*分钟</span>
          </div>
        </div>
        <div class="right">
          <div class="white">
            <div class="title">豆瓣评分</div>
            <div class="num">{{ detail.rating.average }}</div>
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
                  <div :style="{'width': Math.floor(parseFloat(detail.rating.average))*10+'%' }" class="active">
                    <div style="width: 1.25rem;">
                      <img src="../../../static/images/startsActive.png" alt="">
                      <img src="../../../static/images/startsActive.png" alt="">
                      <img src="../../../static/images/startsActive.png" alt="">
                      <img src="../../../static/images/startsActive.png" alt="">
                      <img src="../../../static/images/startsActive.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="person">{{ detail.ratings_count }}人</div>
          </div>
        </div>
      </div>
      <div class="simpleDes">
        <div class="title">
          简介
        </div>
        <div :class="'main '+overflow">
          {{ detail.summary }}
        </div>
        <span @click="display">{{text}}</span>
      </div>
      <div class="actor">
        <div class="title">影人</div>
        <div class="main">
          <div v-for="(v,index) in detail.casts" class="listItem">
            <img src="../../../static/images/actor_03.jpg" alt="">
            <span>{{ v.name }}</span>
          </div>


        </div>
      </div>
      <footers></footers>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import api from '../../api/api'
  import getUrl from '../../plugin/getUrl'
  import { Actionsheet } from 'vux'
  import footers from '../../components/footer.vue'
  export default {
    name:'articleDetail',
    data() {
      return {
        overflow:'overflow',
        text:'展开',
        detail:{}
      }
    },
    components:{
      Actionsheet,
      footers
    },
    mounted:function () {
      this.info()
    },
    methods:{
      //点击展开
      display:function () {
        if(this.overflow){
          this.overflow="";
          this.text="收起"
        }else{
          this.overflow="overflow";
          this.text="展开"
        }
      },
      //通过id获取电影信息
      info:function () {
        var that=this;

        axios.get(api.api.cinemaInfo+getUrl.plugin.getQueryString('id'),{
          params:{

          }
        }).then(function (res) {
//          console.log(res);
          that.detail=res.data
        }).catch(function (error) {
          console.log(error);
        })
      }
    }
  }
</script>

<style>
  @import "css/articleDetail.css";
</style>
