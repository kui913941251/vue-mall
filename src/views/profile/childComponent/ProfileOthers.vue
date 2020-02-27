<template>
  <div class="profile_others">
    <div v-for="item in others">
      <img :src="item.icon" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  import cartIcon from "assets/img/profile/cart.svg"
  import shoppingIcon from "assets/img/profile/shopping.svg"

  export default {
    name: "ProfileOthers",
    data() {
      return {
        others: [
          { icon: cartIcon , title: "我的购物车"},
          { icon: shoppingIcon , title: "下载购物APP"}
        ]
      }
    }
  }
</script>

<style scoped>
  .profile_others{
    margin-top: 10px;
    background-color: #fff;
  }

  .profile_others > div{
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .profile_others > div img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: -4px;
  }
  .profile_others > div span{
    font-size: 15px;
    margin-left: 5px;
  }
</style>