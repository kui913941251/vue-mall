<template>
  <div id="detail">
    <detail-nav-bar ref="detailNav" @changePageY="changePageY"></detail-nav-bar>
    <scroll class="content" ref="scroll" @contentScroll="contentScroll" @scrollEnde="scrollEnde">
      <div class="swiper-container" v-if="topImg.length > 0">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in topImg" :key="index">
            <img :src="item" alt="">
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailGoods="detailGoods"
                         @imgLoadFinish="imgLoadFinish"></detail-goods-info>
      <detail-goods-params :goodsParams="goodsParams" ref="goodsParams"></detail-goods-params>
      <detail-goods-rate :rate="rate" ref="goodsRate"></detail-goods-rate>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addGoods="addGoods" :tip-text="tipText"></detail-bottom-bar>
    <back-top v-show="isBackTopShow" @click.native="returnTop"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponent/DetailNavBar";
  import DetailBaseInfo from "./childComponent/DetailBaseInfo";
  import DetailShopInfo from "./childComponent/DetailShopInfo";
  import DetailGoodsInfo from "./childComponent/DetailGoodsInfo";
  import DetailGoodsParams from "./childComponent/DetailGoodsParams";
  import DetailGoodsRate from "./childComponent/DetailGoodsRate";
  import GoodsList from "components/content/goods/GoodsList";
  import DetailBottomBar from "./childComponent/DetailBottomBar";

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Scroll from "components/common/scroll/Scroll";
  import Toast from "components/common/toast/Toast";

  import {getGoodsDetail , getGoodsRecommend , Goods , Shop , GoodsParams} from "network/detail";
  import {debounce} from "common/tool";
  import {BackTopMixin} from "common/mixin.js"

  export default {
    name: "Detail",
    components: {
      swiper,
      swiperSlide,
      DetailBaseInfo,
      DetailNavBar,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailGoodsParams,
      DetailGoodsRate,
      DetailBottomBar,
      GoodsList,
      Scroll,
      Toast
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
        iid: "",
        topImg: [],
        goods: {},
        shop: {},
        detailGoods: {},
        goodsParams: {},
        rate:{},
        recommend: null,
        scroll: null,
        detailImgLoad: null,
        goodsY: 0,
        paramsY: 0,
        rateY: 0,
        recommendY: 0,
        isClick: false,
        tipText: ""
      }
    },
    created() {
      // 保存id
      this.iid = this.$route.params.id
      // 根据id请求详情数据
      getGoodsDetail(this.iid).then(res => {
        const data = res.result
        // 获取顶部轮播图数据
        this.topImg = data.itemInfo.topImages

        // 获取商品的信息
        this.goods = new Goods(data.itemInfo , data.columns , data.shopInfo.services)

        // 获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 获取detail商品图片与说明
        this.detailGoods = data.detailInfo

        // 获取detail商品的参数信息
        this.goodsParams = new GoodsParams(data.itemParams)

        // 取出评论信息
        this.rate = data.rate
      })

      // 请求detail页面的推荐数据
      getGoodsRecommend().then(res => {
        this.recommend = res.data.list
      })
    },
    methods: {
      imgLoadFinish() {
        this.$refs.scroll.refresh()
        this.getNavPosition()
      },
      // 获取导航栏的各个Y的坐标
      getNavPosition() {
        this.goodsY = 0
        this.paramsY = this.$refs.goodsParams.$el.offsetTop - 44
        this.rateY = this.$refs.goodsRate.$el.offsetTop - 44
        this.recommendY = this.$refs.recommend.$el.offsetTop - 44
        // console.log(this.goodsY , this.paramsY , this.rateY , this.recommendY)
      },
      // 监听页面滚动
      contentScroll(position) {
        // 导航栏的切换
        if (this.isClick) return
        let positionY = position.y
        if (-positionY < this.paramsY) {
          this.$refs.detailNav.currentIndex = 0
        }else if (-positionY < this.rateY) {
          this.$refs.detailNav.currentIndex = 1
        }else if (-positionY < this.recommendY) {
          this.$refs.detailNav.currentIndex = 2
        }else {
          this.$refs.detailNav.currentIndex = 3
        }

        // backTop的显示与隐藏
        this.listenShowBackTop(positionY)
      },
      // 点击导航栏的监听
      changePageY(index) {
        switch (index) {
          case 0:
            this.isClick = true
            this.$refs.scroll.scroll.scrollTo(0 , -this.goodsY , 500)
            break
          case 1:
            this.isClick = true
            this.$refs.scroll.scroll.scrollTo(0 , -this.paramsY , 500)
            break
          case 2:
            this.isClick = true
            this.$refs.scroll.scroll.scrollTo(0 , -this.rateY , 500)
            break
          case 3:
            this.isClick = true
            this.$refs.scroll.scroll.scrollTo(0 , -this.recommendY , 500)
            break
        }
      },
      // 监听滚动完成
      scrollEnde() {
        this.isClick = false
      },
      // 添加商品到购物车
      addGoods() {
        // 创建商品对象
        const product = {}
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.img = this.topImg[0]
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 将商品对象传入vuex
        // 保存this
        const _this = this
        this.$store.dispatch("addGoods" , product).then(res => {
          this.$toast.show(res , 2000)
        })
      }
    },
    mounted() {
      let refresh = debounce(this.$refs.scroll.refresh , 300)
      this.detailImgLoad = () => {
        refresh()
      }
      this.$bus.$on("imgLoad" , this.detailImgLoad)


    },
    deactivated() {
      this.$bus.$off("imgLoad" , this.detailImgLoad)
    }
  }
</script>

<style scoped>
   #detail{
     position: relative;
     z-index: 999;
     background-color: #fff;
     height: 100vh;
   }

  .swiper-container {
    position: relative;
    height: 300px;
    --swiper-theme-color: #ff6600;
  }
  .swiper-container img{
    width: 100%;
  }
  .swiper-pagination{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50% , 0);
  }
  
  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>