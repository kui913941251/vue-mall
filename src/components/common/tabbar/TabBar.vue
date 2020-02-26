<template>
  <div class="tab_bar">
    <tab-bar-item active-path="/home">
      <img slot="slot_img" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="slot_img_active" src="~assets/img/tabbar/home_active.svg" alt="">
      <span slot="slot_text">首页</span>
    </tab-bar-item>
    <tab-bar-item active-path="/category">
      <img slot="slot_img" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="slot_img_active" src="~assets/img/tabbar/category_active.svg" alt="">
      <span slot="slot_text">分类</span>
    </tab-bar-item>
    <tab-bar-item active-path="/shopcart">
      <img slot="slot_img" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="slot_img_active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <span slot="slot_text">购物车</span>
    </tab-bar-item>
    <tab-bar-item active-path="/profile">
      <img slot="slot_img" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="slot_img_active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <span slot="slot_text">我的</span>
    </tab-bar-item>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";

  export default {
    name: "TabBar",
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab_bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    display: flex;
    background-color: #f6f6f6;
    padding-top: 4px;
    box-sizing: border-box;
  }
</style>