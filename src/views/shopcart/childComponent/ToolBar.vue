<template>
  <div class="cart-clear">
    <div class="check_all" @click="checkAll" :class="{checked: isCheckAll}">
      全选
    </div>
    <div class="total_price">
      合计: <span>{{totalPrice || 0}}</span>
    </div>
    <div class="clear_account" @click="clearAccount">结算 ({{totalCount || 0}})</div>
  </div>
</template>

<script>
  export default {
    name: "ToolBar",
    data() {
      return {
      }
    },
    computed: {
      totalPrice() {
        return "￥" + this.$store.state.cartList.filter((item) => {
          return item.checked === true
        }).reduce((preValue , item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      totalCount() {
        return this.$store.state.cartList.filter(item => {
          return item.checked === true
        }).length
      },
      isCheckAll() {
        if (this.$store.state.cartList.length === 0) return false
        return !this.$store.state.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkAll() {
        if (this.isCheckAll) {   // 如果全部选中
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else {  // 如果没有全部选中
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      // 购买成功，清除购物车
      clearAccount() {
        this.$store.dispatch("clearAccount")
      }
    }
  }
</script>

<style scoped>
  .cart-clear{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    height: 40px;
    background-color: #fff;
    padding: 0 5px;
    font-size: 15px;
    display: flex;
    align-items: center;
    border-top:1px solid #ccc ;
    border-bottom:1px solid #ccc ;
  }

  .check_all{
  }
  .check_all::before{
    box-sizing: border-box;
    content: "";
    position: relative;
    bottom: -3px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  .check_all.checked::before{
    background: #ff8c99 url("~assets/img/cart/tick.svg") no-repeat center center;
    background-size: 13px;
    border: none;
  }

  .clear_account{
    box-sizing: border-box;
    padding: 5px 10px;
    text-align: right;
    background-color: #ff8e97;
    border-radius: 20px;
    color: #fff;
  }

  .total_price{
    margin-right: 10px;
    margin-left: auto;
  }
  .total_price span{
    color: #f7743d;
  }
</style>