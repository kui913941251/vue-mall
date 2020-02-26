<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" class="tab_control_item " @click="changeIndex(index)">
      <span :class="{active: currentIndex == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      changeIndex(index) {
        this.currentIndex = index
        this.$emit('changeType' , index)
      }
    }
  }
</script>

<style scoped>
  .tab_control{
    position: relative;
    display: flex;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
  }
  .tab_control_item{
    flex: 1;
    text-align: center;
  }
  .tab_control_item span{
    padding: 4px;
    font-size: 15px;
    color: #666;
  }
  .active{
    border-bottom: 2px solid #ff5777;
    color: #ff5777 !important;
  }
</style>