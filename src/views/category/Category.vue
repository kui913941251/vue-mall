<template>
  <div class="category">
    <nav-bar class="category_nav">
      <div slot="slot_center">分类</div>
    </nav-bar>
    <div class="wrapper">
      <scroll class="scroll_left">
        <category-classify :classify="classify" @indexChange="indexChange"></category-classify>
      </scroll>
      <scroll class="scroll_right">
        <category-classify-list :classifyItem="classify[classifyIndex]"></category-classify-list>
      </scroll>
    </div>
  </div>
</template>

<script>
  import CategoryClassify from "./childComponent/CategoryClassify";
  import CategoryClassifyList from "./childComponent/CategoryClassifyList";

  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "Category",
    components: {
      NavBar,
      Scroll,
      CategoryClassify,
      CategoryClassifyList
    },
    data() {
      return {
        classify: [
          "全部" , "分类1" , "分类2" , "分类3" , "分类4" , "分类5" , "分类6" , "分类7" , "分类8" , "分类9" , "分类10" , "分类11" ,
          "分类12" , "分类13" , "分类14" , "分类15" , "分类16" , "分类17" , "分类18" , "分类19" , "分类20" , "分类21" , "分类22" ,
          "分类23" , "分类24" , "分类25" , "分类26" , "分类27" , "分类28" , "分类29" , "分类30"
        ],
        classifyIndex: 0
      }
    },
    methods: {
      indexChange(index) {
        this.classifyIndex = index
      }
    }
  }
</script>

<style scoped>
  .scroll_left{
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
    width: 80px;
    float: left;
    box-sizing: border-box;
    background-color: #f7f5f7;
  }
  .scroll_right{
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
  
  .category_nav{
    background-color: #ff8198;
    color: #fff;
  }
  
</style>