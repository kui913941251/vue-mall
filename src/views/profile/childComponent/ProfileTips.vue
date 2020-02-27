<template>
  <div class="profile_tips">
    <div v-for="item in tips">
      <img :src="item.icon" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  import messageIcon from "assets/img/profile/message.svg"
  import creditsIcon from "assets/img/profile/credits.svg"
  import memberIcon from "assets/img/profile/member.svg"

  export default {
    name: "ProfileTips",
    data() {
      return {
        tips: [
          {icon: messageIcon , title: "我的消息"},
          {icon: creditsIcon , title: "积分商城"},
          {icon: memberIcon , title: "会员卡"}
        ]
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .profile_tips{
    margin-top: 10px;
    background-color: #fff;
  }

  .profile_tips > div{
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .profile_tips > div img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: -4px;
  }
  .profile_tips > div span{
    font-size: 15px;
    margin-left: 5px;
  }
</style>