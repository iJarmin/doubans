<template>
  <div id="listComponent">
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
                  <img src="../../static/images/starts.png" alt="">
                  <img src="../../static/images/starts.png" alt="">
                  <img src="../../static/images/starts.png" alt="">
                  <img src="../../static/images/starts.png" alt="">
                  <img src="../../static/images/starts.png" alt="">
                </div>
                <div :style="{'width': Math.floor(parseFloat(v.rating.average))*10+'%' }" class="active">
                  <div style="width: 1.25rem;">
                    <img src="../../static/images/startsActive.png" alt="">
                    <img src="../../static/images/startsActive.png" alt="">
                    <img src="../../static/images/startsActive.png" alt="">
                    <img src="../../static/images/startsActive.png" alt="">
                    <img src="../../static/images/startsActive.png" alt="">
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
  </div>
</template>

<script>
  export default {
    name: 'App',
    props:["list"],
    data(){
      return {

      }
    }
  }

</script>

<style>
  #listComponent ul li {
    padding: 0.45rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    border-top: 0.01rem solid #e4e4e4;
    border-bottom: 0.01rem solid #e4e4e4; }
  #listComponent ul li .left {
    float: left; }
  #listComponent ul li .left img {
    width: 1.81rem;
    height: 2.52rem; }
  #listComponent ul li .right {
    float: right;
    width: 4.25rem; }
  #listComponent ul li .right > span {
    display: block;
    font-size: 0.35rem;
    color: #9a9a9a;
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; }
  #listComponent ul li .right .title {
    font-size: 0.48rem;
    font-weight: 700;
    color: #494949;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0.1rem; }
  #listComponent ul li .right .starts {
    margin-top: 0.15rem;
    margin-bottom: 0.15rem; }
  #listComponent ul li .right .starts .text {
    font-size: 0.22rem;
    color: #9a9a9a; }
  #listComponent ul li .right .starts .score {
    position: relative;
    width: 1.25rem;
    height: 0.25rem; }
  #listComponent ul li .right .starts .score img {
    width: 0.25rem;
    float: left; }
  #listComponent ul li .right .starts .score .active {
    position: absolute;
    height: 100%;
    white-space: nowrap;
    overflow: hidden; }
  #listComponent ul li .right .starts .score .NotActive {
    position: absolute;
    height: 100%;
    white-space: nowrap; }
</style>
