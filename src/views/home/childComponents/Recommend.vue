<template>
  <div class="recommends">
    <div class="recommends_item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Recommend",
    props: {
      recommends: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .recommends{
    display: flex;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .recommends_item{
    flex: 1;
    text-align: center;
    padding: 10px 0 10px;
  }
  .recommends_item img{
    width: 50px;
  }
  .recommends_item p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }
</style>