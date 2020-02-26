<template>
  <div class="detail_shop">
    <div class="shop_title">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop_other">
      <div class="shop_star">
        <div class="shop_sells">
          <span class="number">{{shop.sells | numberFormat}}</span>
          <p class="text">总销量</p>
        </div>
        <div class="shop_counts">
          <span class="number">{{shop.goodsCount}}</span>
          <p class="text">全部宝贝</p>
        </div>
      </div>
      <span class="line"></span>
      <div class="shop_score">
        <div v-for="item in shop.score">
          <span class="text" :class="{is_better: item.isBetter}">{{item.name}}</span>
          <span class="score" :class="{is_better: item.isBetter}">{{item.score}}</span>
        </div>
      </div>
    </div>
    <div class="shop_url">进店逛逛</div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default: {}
      }
    },
    filters: {
      numberFormat(value) {
        if (!value) return
        let num = value
        if (num.toString().length > 4 ) {
          num = (num / 10000).toFixed(1) + "万"
        }
        return num
      }
    }
  }
</script>

<style scoped>
  .detail_shop{
    border-bottom: 1px solid #eee;
    margin: 10px 10px;
    padding-bottom: 10px;
  }

  .shop_title{
    display: flex;
    align-items: center;
  }
  .shop_title img{
    width: 40px;
    border-radius: 50%;
    border: 1px solid #eee;
  }
  .shop_title span{
    font-size: 14px;
    color: #9aa3ac;
    margin-left: 10px;
  }

  .shop_other {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .shop_other > div{
    flex: 1;
  }

  .shop_star {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .shop_star .number{
    font-size: 16px;
  }
  .shop_star .text{
    font-size: 12px;
    margin-top: 5px;
  }
  .shop_sells {
    margin-right: 15px;
  }

  .shop_score{
    box-sizing: border-box;
    padding: 0 0 0 20px;
  }
  .shop_score > div {
    margin-bottom: 10px;
    font-size: 13px;
  }
  .shop_score .score{
    position: relative;
    margin-left: 15px;
    color: #5c903e;
  }
  .shop_score .score.is_better{
    color: #f2634d;
  }
  .shop_score .score::after{
    content: "低";
    position: absolute;
    left: 40px;
    font-size: 12px;
    color: #fff;
    background-color: #5c903e;
  }
  .shop_score .score.is_better::after{
    content: "高";
    background-color: #f2634d;
  }

  .line {
    display: block;
    width: 2px;
    height: 40px;
    background-color: #f5f4f5;
  }

  .shop_url{
    width: 100px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin: 0 auto;
    border-radius: 5px;
    font-size: 13px;
    background-color: #eff2f7;
    color: #999;
  }
</style>