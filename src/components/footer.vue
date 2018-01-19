<template>
  <div id="footer">
    <footer>
      <router-link to="/hotPlay">
        <img src="../../static/images/hot.png" alt="">
        <span>热映</span>
      </router-link>
      <router-link to="/find">
        <img src="../../static/images/find.png" alt="">
        <span>找片</span>
      </router-link>
      <router-link to="/my">
        <img src="../../static/images/my.png" alt="">
        <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>
<script>
  export default {
    name:'footer'
  }
</script>
