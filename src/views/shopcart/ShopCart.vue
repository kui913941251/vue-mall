<template>
  <div class="shop_cart">
    <nav-bar class="cart_nav">
      <div slot="slot_center">购物车({{cartList.length}})</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list :cartList="cartList"></cart-list>
    </scroll>
    <tool-bar></tool-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./childComponent/CartList";
  import ToolBar from "./childComponent/ToolBar";

  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "ShopCart",
    components: {
      NavBar,
      CartList,
      ToolBar,
      Scroll
    },
    data() {
      return {
        cartList: []
      }
    },
    activated() {
      this.$refs.scroll.scroll.refresh()
      // console.log(this.$refs.scroll.scroll.scrollerHeight , this.$refs.scroll.scroll.scrollerHeight)
    },
    created() {
      this.cartList = this.$store.state.cartList
    },
    methods: {
      clearAccount() {
        this.$store.dispatch("clearAccount").then(res => {
          this.$toast.show(res , 2000)
        })
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .shop_cart{
    position: relative;
    height: 100vh;
  }

  .cart_nav{
    background-color: #ff8e97;
    color: #fff;
  }

  .scroll{
    height: calc(100vh - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>