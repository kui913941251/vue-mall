<template>
  <div>
    <div class="main">
      <img src="~assets/img/common/top.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .main{
    position: fixed;
    right: 20px;
    bottom: 60px;
    width: 40px;
    height: 40px;
  }
  .main img{
    width: 100%;
  }
</style>