<template>
  <div class="goods_info">
    <div class="goods_desc">
      {{detailGoods.desc}}
    </div>
    <div class="goods_img">
      <div v-for="item in detailGoods.detailImage? detailGoods.detailImage[0].list : []">
        <img :src="item" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailGoods: {
        type: Object
      }
    },
    data() {
      return {
        imgCount: 0,
        imgLoadCount: 0
      }
    },
    methods: {
      imgLoad() {
        if (++this.imgCount === this.imgLoadCount) {
          this.$emit("imgLoadFinish")
        }
      }
    },
    watch: {
      detailGoods() {
        this.imgLoadCount = this.detailGoods.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goods_info{
    padding: 10px;
  }

  .goods_desc{
    font-size: 15px;
  }
  .goods_desc::before{
     content: "";
     display: block;
     width: 200px;
     height: 1px;
     background-color: #ddd;
     margin-bottom: 20px;
   }
  .goods_desc::after{
    content: "";
    display: block;
    width: 200px;
    height: 1px;
    background-color: #ddd;
    margin-top: 20px;
    float: right;
  }

  .goods_img img{
    width: 100%;
  }
</style>