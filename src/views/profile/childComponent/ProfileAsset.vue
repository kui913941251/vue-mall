<template>
  <div class="profile_asset">
    <div class="balance">
      <span><span class="red">0.00</span> 元</span>
      <p>我的余额</p>
    </div>
    <div class="discount">
      <span><span class="red">0</span> 个</span>
      <p>优惠券</p>
    </div>
    <div class="credits">
      <span><span class="red">0</span> 分</span>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileAsset"
  }
</script>

<style scoped>
  .profile_asset{
    display: flex;
    background-color: #fff;
  }
  .profile_asset > div{
    flex: 1;
    text-align: center;
    padding: 10px
  }
  .profile_asset > div:nth-child(2){
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
  .profile_asset > div p{
    font-size: 12px;
    margin-top: 5px;
  }
  .profile_asset > div span{
    font-size: 13px;
  }
  .profile_asset > div .red{
    font-size: 18px;
    color: #ff6f52;
    font-weight: bold;
  }
</style>