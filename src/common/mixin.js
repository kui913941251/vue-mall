import BackTop from "components/content/backtop/BackTop";



export const BackTopMixin = {
  data() {
    return {
      isBackTopShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    // 回到顶部
    returnTop() {
      this.$refs.scroll.returnTop()
      // console.log("我是mixin里面的click")
    },
    listenShowBackTop(position) {
      this.isBackTopShow = -position > 1000
      // console.log(position)
    }
  }
}