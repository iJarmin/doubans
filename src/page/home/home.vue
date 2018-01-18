<template>
  <div id="home">
    <div class="main">
      <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,$index) in detail.imgs">
            <a>
              <figure class="wp-avatar banner">
                <img v-cloak :src="item | toQiNiuImg"/>
              </figure>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
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
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import  { LoadingPlugin } from 'vux'
  import Swiper from 'swiper';
  Vue.use(LoadingPlugin)
  export default {
    name: 'home',
    data() {
      return {
        lists: [{
          rating: {
            max: 10,
            average: 8.4,
            stars: "45",
            min: 0
          },
          genres: [
            "剧情",
            "儿童",
            "家庭"
          ],
          title: "奇迹男孩",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1332866/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.jpg"
              },
              name: "雅各布·特伦布莱",
              id: "1332866"
            },
            {
              alt: "https://movie.douban.com/celebrity/1006964/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2059.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2059.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2059.jpg"
              },
              name: "欧文·威尔逊",
              id: "1006964"
            },
            {
              alt: "https://movie.douban.com/celebrity/1054532/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.jpg"
              },
              name: "朱莉娅·罗伯茨",
              id: "1054532"
            }
          ],
          collect_count: 2570,
          original_title: "Wonder",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1070754/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.jpg"
              },
              name: "斯蒂芬·卓博斯基",
              id: "1070754"
            }
          ],
          year: "2017",
          images: {
            small: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg",
            large: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg",
            medium: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg"
          },
          alt: "https://movie.douban.com/subject/26787574/",
          id: "26787574"
        }],
        tab: ['即将上映', '正在热映'],
        tabActive: 0,
        getUrl: ['/v2/movie/in_theaters', '/v2/movie/coming_soon'],
        detail:{
          imgs:[
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516273493793&di=161a5facc3f9531cb5e384bbc49e36a0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fe850352ac65c1038377309efb9119313b07e898a.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516273880969&di=28ac8af1276682deedd927b872ee2ec2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4610b912c8fcc3ce0e2e0e1e9945d688d43f2035.jpg'
          ]
        }
      }
    },
    mounted: function () {
//      this.list(this.getUrl[1])
      this.banner()
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
      },
      //轮播图
      banner:function () {
        setTimeout(function () {
          var swiperObj =  new Swiper('#swiper', {
            loop: true,
            pagination: '.swiper-pagination',
            autoplay: 2000,
            paginationClickable: true
          });
        },500)
//        setTimeout(function () {
//          state.swiperObj =  new Swiper('#swiper', {
//            loop: true,
//            pagination: '.swiper-pagination',
//            autoplay: 2000,
//            paginationClickable: true
//          });
//        }, 100)
      }
    }
  }
</script>

<style>
  @import '../../../node_modules/swiper/dist/css/swiper.min.css';
  @import "css/home.css";
</style>
