<template>
  <div id="app">
    <div id="app_in">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
//  const app = new Vue({
//    router
//  }).$mount('#app')
</script>

<style>
#app {
  width: 100%;
  max-width: 750px;
  min-width: 320px;
  margin: 0 auto;
}
  footer{
    width: 100%;
    height: 1rem;
    background-color: #fff;
    left: 0;
    bottom: 0;
    position: fixed;
    box-shadow:1px 1px 31px -11px #000;
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    padding-top: 0.1rem;
    z-index: 999;
  }
  footer img{
    width: 0.6rem;
    display: block;
    margin: 0 auto;
  }
footer span{
  display: block;
  color: #999999;
  font-size: 0.22rem;
}
footer a{
  width: 33.3%;
  text-decoration: none;
}
</style>
