<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: "商品添加成功",
        isShow: false,
        timer: null
      }
    },
    methods: {
      show(message , delay) {
        if (this.timer) {
          this.isShow = false
          clearTimeout(this.timer)
        }
        this.message = message
        this.isShow = true
        this.timer = setTimeout(() => {
          this.isShow = false
        }, delay)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    padding: 8px 10px;
    background-color: rgba(0 , 0 , 0 , .7);
    color: #fff;
    z-index: 10000;
    font-size: 13px;
    border-radius: 10px;
  }
</style>