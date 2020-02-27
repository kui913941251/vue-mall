<template>
  <div class="classify_list">
    <p>{{classifyItem}}</p>
    <div v-for="index in 20" class="list_item">{{classifyItem}}内容</div>
  </div>
</template>

<script>
  export default {
    name: "CategoryClassifyList",
    props: {
      classifyItem: String
    }
  }
</script>

<style scoped>
  .classify_list{
    padding-top: 10px;
    width: calc(100vw - 80px);
    overflow: hidden;
  }

  .list_item{
    width: 50%;
    float: left;
    height: 150px;
    text-align: center;
    line-height: 150px;
  }

  p {
    text-align: center;
  }
</style>