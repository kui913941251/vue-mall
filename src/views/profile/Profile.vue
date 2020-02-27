<template>
  <div class="profile">
    <nav-bar class="profile_nav">
      <div slot="slot_center">我的</div>
    </nav-bar>
    <profile-regist></profile-regist>
    <profile-asset></profile-asset>
    <profile-tips class="profile_tips"></profile-tips>
    <profile-others></profile-others>
  </div>
</template>

<script>
  import ProfileRegist from "./childComponent/PorfileRegist";
  import ProfileAsset from "./childComponent/ProfileAsset";
  import ProfileTips from "./childComponent/ProfileTips";
  import ProfileOthers from "./childComponent/ProfileOthers";

  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "Profile",
    components: {
      NavBar,
      ProfileRegist,
      ProfileAsset,
      ProfileTips,
      ProfileOthers
    }
  }
</script>

<style scoped>
  .profile{
    background-color: #f3f2f3;
    height: 100vh;
  }

 .profile_nav{
   background-color: #ff8d97;
   color: #fff;
 }
</style>