<template>
  <div class="home">
    <nav-bar class="home_nav">
      <div slot="slot_center">
        购物街
      </div>
    </nav-bar>
    <tab-control :titles="['流行' , '新款' , '精选']"
                 @changeType="changeType"
                 ref="tabControlTop"
                 class="tab-control-top"
                 v-show="tabControlFixed"></tab-control>
    <scroll class="wrapper" ref="scroll"
            @loadMore="loadMore"
            @contentScroll="contentScroll">
        <div class="swiper-container" v-if="swiperBanner.length > 0">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in swiperBanner" :key="index">
              <img :src="item.image" alt="" @load="swiperImgLoad">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
        <recommend :recommends="recommends"></recommend>
        <popular></popular>
        <tab-control :titles="['流行' , '新款' , '精选']"
                     @changeType="changeType"
                     ref="tabControl"></tab-control>
        <goods-list :goods="goods[showGoodsType].list"></goods-list>
    </scroll>
    <back-top v-show="isBackTopShow" @click.native="returnTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Recommend from "./childComponents/Recommend";
  import Popular from "./childComponents/Popular";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  // import BackTop from "../../components/content/backtop/BackTop";


  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  import {getHomeMultidata,getHomeGoodsData} from "network/home";
  import {debounce} from "common/tool";
  import {BackTopMixin} from "common/mixin.js"

  export default {
    name: "Home",
    components: {
      Popular,
      NavBar,
      swiper,
      swiperSlide,
      Recommend,
      TabControl,
      GoodsList,
      Scroll,
    },
    mixins: [
      BackTopMixin
    ],
    data() {
      return {
        swiperOption: {
          //循环
          loop: true,
          loopAdditionalSlides : 1,
          //设定初始化时slide的索引
          initialSlide: 0,
          //自动播放
          autoplay: {
            delay: 1000,
            disableOnInteraction : false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          }
        },
        swiperBanner: [],
        recommends: [],
        goods: {
          "pop": {page: 0 , list: []},
          "sell": {page: 0 , list: []},
          "new": {page: 0 , list: []}
        },
        showGoodsType: "pop",
        timer: null,
        isSwiperImgLoad: false,
        tabControlOffestY: 0,
        tabControlFixed: false,
        saveY: 0,
        homeImgLoad: null
      }
    },
    created() {
      // 获取首页轮播，推荐数据
      this.getHomeMultidata()

      // 获取首页商品数据
      this.getHomeGoodsData("pop")
      this.getHomeGoodsData("sell")
      this.getHomeGoodsData("new")

    },
    mounted() {
      // 每次增加图片，刷新scroll
      let refresh = debounce(this.$refs.scroll.refresh , 300)
      this.homeImgLoad = () => {
        refresh()
      }
      this.$bus.$on("imgLoad" , this.homeImgLoad)
    },
    methods: {
      // 网络请求开始
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.swiperBanner = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoodsData(type) {
        const page = this.goods[type].page + 1
        this.goods[type].page = page
        getHomeGoodsData(type , page).then(res => {
          this.goods[type].list.push(...res.data.list)
        })
      },
      // 网络请求结束

      // tabControl显示类型
      changeType(index) {
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControlTop.currentIndex = index
        switch (index) {
          case 0:
            this.showGoodsType = "pop"
            break
          case 1:
            this.showGoodsType = "sell"
            break
          case 2:
            this.showGoodsType = "new"
            break
        }
      },
      // 下拉加载更多商品
      loadMore() {
        this.getHomeGoodsData(this.showGoodsType)
      },
      // 滚动区域的Y轴距离
      contentScroll(position) {
        // 控制回到顶部显示隐藏
        this.listenShowBackTop(position.y)

        // 为tabControl添加吸顶效果
        this.tabControlFixed = (-position.y) > this.tabControlOffestY
      },

      // 判断轮播图是否加载完成
      swiperImgLoad() {
        // 计算tabControl的offsetTop
        if (!this.isSwiperImgLoad) {
          this.tabControlOffestY = this.$refs.tabControl.$el.offsetTop
        }
        this.isSwiperImgLoad = true
      }
    },
    activated() {
      this.$refs.scroll.scroll.scrollTo(0 , this.saveY , 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 保存离开首页时Y的滚动距离
      this.saveY = this.$refs.scroll.scroll.y

      // 停止对图片加载完成的监听
      this.$bus.$off("imgLoad" , this.homeImgLoad)
    }
  }
</script>

<style scoped>
  .home{
    background-color: #eeeeee;
  }
  .home_nav{
    background-color: #ff8198;
    color: #fff;
    z-index: 999;
  }

  .swiper-container{
    position: relative;
    width: 100vw;
  }
  .swiper-container img{
    width: 100%;
    vertical-align: middle;
  }
  .swiper-pagination {
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translate(-50% , 0);
  }

  .wrapper{
    height: calc(100vh - 93px);
    overflow: hidden;

    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
  .tab-control-top{
    position: relative;
    z-index: 999;
  }
</style>