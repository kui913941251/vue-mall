<template>
  <div class="goods_item" @click="goToDetail">
    <div class="goods_img">
      <img :src="showImg" alt="" @load="imgLoad"></div>
    <div>
      <p class="goods_title">{{showTitle}}</p>
      <p>
        <span class="goods_star">☆{{showStar}}</span>
        <span class="goods_price">{{showPrice | priceInit}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default: {}
      }
    },
    computed: {
      showImg() {
        return this.goodsItem.image || this.goodsItem.show.img
      },
      showTitle() {
        return this.goodsItem.title
      },
      showStar() {
        return this.goodsItem.cfav
      },
      showPrice() {
        return this.goodsItem.price
      }
    },
    filters: {
      priceInit(value) {
        return "￥" + value
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit("imgLoad")
      },
      goToDetail() {
        // 展示点击的商品详情页面
        this.$router.push("/detail/" + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods_item{
    box-sizing: border-box;
    width: 50%;
    float: left;
    padding: 5px;
  }
  .goods_img{
    height: 225px;
    margin-bottom: 4px;
  }

  .goods_item img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    vertical-align: middle;
  }
  .goods_item span{
    font-size: 12px;
  }
  .goods_item p:nth-child(2){
    text-align: center;
  }

  .goods_title{
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods_star{
    color: #ff5777;
    margin-right: 5px;
  }
</style>