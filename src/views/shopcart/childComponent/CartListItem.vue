<template>
  <div class="list_item">
    <div class="check" @click="checked" :class="{checked: listItem.checked}">
      <i></i>
    </div>
    <div class="img">
      <img :src="listItem.img" alt="">
    </div>
    <div class="info">
      <div class="info_title">{{listItem.title}}</div>
      <div class="info_rec">{{listItem.desc}}</div>
      <div class="info_other">
        <span class="info_price">{{listItem.price | priceFormat}}</span>
        <span class="info_count">x {{listItem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cartListItem",
    props: {
      listItem: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        isChecked: false
      }
    },
    methods: {
      checked() {
        this.listItem.checked = !this.listItem.checked
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
  .list_item{
    box-sizing: border-box;
    display: flex;
    height: 100px;
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
  }

  .check{
    flex: 1;
    text-align: center;
    line-height: 80px;
  }
  .check::after{
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
  .check.checked::after{
    background: #ff8c99 url("~assets/img/cart/tick.svg") no-repeat center center;
    background-size: 13px;
    border: none;
  }

  .img{
    flex: 2;
    border-radius: 5px;
    overflow: hidden;
  }
  .img img{
    width: 100%;
    height: 100%;
  }

  .info{
    width: 0px;
    box-sizing: border-box;
    flex: 7;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info_title{
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info_rec{
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #aaa;
  }
  .info_other{
    font-size: 13px;
  }
  .info_count{
    float: right;
  }
  .info_price{
    color: #f7743d;
  }
</style>