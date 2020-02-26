<template>
  <div class="cart_list">
    <cart-list-item v-for="item in cartList" :list-item="item"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";

  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    props: {
      cartList: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .cart_list{
  }
</style>