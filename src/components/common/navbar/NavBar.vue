<template>
  <div class="nav_bar">
    <div class="left"><slot name="slot_left"></slot></div>
    <div class="center"><slot name="slot_center"></slot></div>
    <div class="right"><slot name="slot_right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav_bar{
    line-height: 44px;
    display: flex;
    text-align: center;
    box-shadow: 0 1px 2px rgba(100,100,100,.3);
  }

  .left{
    width: 60px;
  }
  .right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>