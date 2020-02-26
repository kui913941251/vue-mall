<template>
  <div>
    <nav-bar>
      <div slot="slot_left" class="slot_left" @click="backPage">
        <img :src="showImg" alt="">
      </div>
      <div slot="slot_center" class="slot_center">
        <div v-for="(item , index) in titles" :key="index" @click="changeCurrentIndex(index)">
          <span :class="{active: currentIndex == index}">{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import img from "assets/img/common/back.svg"

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ["商品" , '参数' , '评论' , '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      changeCurrentIndex(index) {
        this.currentIndex = index
        this.$emit("changePageY" , index)
      },
      backPage() {
        this.$router.go(-1)
      }
    },
    computed: {
      showImg() {
        return img
      }
    }
  }
</script>

<style scoped>
  .slot_center{
    display: flex;
  }
  .slot_center div{
    flex: 1;
  }
  .slot_center div span{
    font-size: 13px;
  }
  .active{
    color: #ff5777;
  }

  .slot_left img {
    width: 20px;
    vertical-align: middle;
  }
</style>