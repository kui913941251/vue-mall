<template>
  <div class="goods_list ">
    <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .goods_list{
    overflow: hidden;
    background-color: #fff;
  }
</style>