<template>
  <div class="alert_text">{{showText}}</div>
</template>

<script>
  export default {
    name: "DetailAlertText",
    props: {
      showText: String
    }
  }
</script>

<style scoped>
  .alert_text{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    padding: 10px 20px;
    background-color: rgba(0 , 0 , 0 , .7);
    color: #fff;
    z-index: 10000;
    font-size: 13px;
  }
</style>