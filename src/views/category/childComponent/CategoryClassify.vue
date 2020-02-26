<template>
  <div class="category_classify">
    <ul>
      <li v-for="(item , index) in classify"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "CategoryClassify",
    props: {
      classify: Array
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit("indexChange" , index)
      }
    }
  }
</script>

<style scoped>
  .category_classify{
    width: 80px;
  }

  .category_classify ul {
    width: 100%;
  }

  .category_classify ul li {
    text-align: center;
    font-size: 15px;
    padding: 5px 0;
  }

  .active{
    background-color: #ff8198;
    color: #fff;
  }
</style>