<template>
  <div class="bottom_bar">
    <div class="icon service">
      <i></i>
      <p>客服</p>
    </div>
    <div class="icon shop">
      <i></i>
      <p>店铺</p>
    </div>
    <div class="icon star" @click="starClick">
      <i :class="{active : starActive}"></i>
      <p>收藏</p>
    </div>
    <div class="add_goods" @click="addClick">加入购物车</div>
    <div class="buy_goods">购买</div>
  </div>
</template>

<script>

  export default {
    name: "DetailBottomBar",
    props: {
      tipText: String,

    },
    data() {
      return {
        starActive: false,
        showText: "收藏成功 !",
        showStar: false
      }
    },
    methods: {
      starClick() {
        this.showStar = true
        setTimeout(() => {
          this.showStar = false
        } , 2000)
        this.starActive = !this.starActive
        if (this.starActive) {
          this.showText = "收藏成功"
        }else {
          this.showText = "取消收藏"
        }
      },
      addClick() {
        this.$emit("addGoods")
      }
    }
  }
</script>

<style scoped>
  .bottom_bar{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 49px;
    background-color: #fff;
    box-sizing: border-box;

    display: flex;
  }

  .icon{
    flex: 1;
    text-align: center;
    padding-top: 5px;
  }
  .icon p{
    font-size: 12px;
    margin-top: 3px;
    color: #686566;
  }
  .icon i{
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-size: 22px;
    vertical-align: middle;
  }
  .service i {
    background-position: 0 -53px;
  }
  .shop i {
    background-position: 0 -99px;
  }
  .star i.active{
    background-position: 0 -27px;
  }

  .add_goods{
    flex: 2;
    text-align: center;
    background-color: #ffde10;
    line-height: 49px;
  }
  .buy_goods{
    flex: 2;
    text-align: center;
    background-color: #ff779b;
    line-height: 49px;
    color: #fff;
  }
</style>