<template>
  <div class="goods_detail" v-if="Object.keys(goods).length != 0">
    <div class="goods_title">{{goods.title}}</div>
    <div class="goods_price">
      <span class="goods_new_price">{{goods.realPrice | priceFormat}}</span>
      <span class="goods_old_price">{{goods.oldPrice}}</span>
      <span class="goods_discount">{{goods.discount}}</span>
    </div>
    <div class="goods_other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="goods_services">
      <div class="serve" v-for="index in goods.services.length - 1">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index - 1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default: {}
      }
    },
    filters: {
      priceFormat(value) {
        return "￥" + value
      }
    }
  }
</script>

<style scoped>
  .goods_detail{
    padding: 10px;
  }
  .goods_price{
    margin-top: 15px;
  }
  .goods_discount{
    content: "优惠价";
    display: inline-block;
    font-size: 10px;
    transform: translateY(-10px);
    color: #fff;
    padding: 2px;
    background-color: #fc6974;
    border-radius: 5px;
  }
  .goods_new_price{
    color: #f1929b;
  }
  .goods_old_price {
    font-size: 10px;
    text-decoration: line-through;
    color: #b2b1b2;
    margin-left: 5px;
  }

  .goods_other{
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: #b2b1b2;
    padding: 15px 0 5px;
    border-bottom: 1px solid #eee;
  }

  .goods_services{
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    border-bottom: 2px solid #eee;
  }
  .serve img{
    width: 10px;
    vertical-align: middle;
  }
  .serve span{
    font-size: 12px;
  }
</style>