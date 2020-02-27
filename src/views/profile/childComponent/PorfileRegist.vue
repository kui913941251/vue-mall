<template>
  <div class="profile_regist">
    <div class="user_img">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="user_name">
      <span>登录/注册</span>
      <p>暂无绑定手机号</p>
    </div>
    <div class="icon">

    </div>
  </div>
</template>

<script>
  export default {
    name: "PorfileRegist"
  }
</script>

<style scoped>
  .profile_regist{
    padding: 15px;
    background-color: #ff8e97;
    display: flex;
    align-items: center;
  }

  .user_img{
    width: 50px;
    height: 50px;
    background-color: #efebef;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    color: #999;
  }
  .user_img img{
    width: 100%;
  }

  .user_name{
    margin-left: 15px;
    color: #fff;
  }
  .user_name span{
    font-size: 15px;
  }
  .user_name p {
    margin-top: 5px;
    font-size: 12px;
  }

  .icon{
    width: 10px;
    height: 10px;
    margin-left: auto;
    border-right: 1px solid #fff;
    border-top: 1px solid #fff;
    transform: rotate(45deg);
  }
</style>