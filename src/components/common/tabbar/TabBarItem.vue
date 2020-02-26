<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="slot_img"></slot></div>
    <div v-else><slot name="slot_img_active"></slot></div>
    <div :class="{active: isActive}"><slot name="slot_text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      activePath: String
    },
    data() {
      return {
        //isActive: this.activePath == this.$route.path
      }
    },
    computed: {
      isActive() {
        return this.activePath == this.$route.path
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.activePath)
      }
    }
  }
</script>

<style scoped>
  .tab_bar_item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab_bar_item img{
    height: 22px;
    width: 22px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: #ff5777;
  }
</style>