<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.initScroll()
    },
    methods: {
      refresh() {
        this.scroll.refresh()
      },
      initScroll() {
        this.scroll = new BScroll(this.$refs.wrapper , {
          probeType: 0,
          pullUpLoad: true,
          click: true
        })

        // 上拉加载更多
        this.scroll.on("pullingUp" , () => {
          this.$emit("loadMore")
          // 提示上拉加载完成
          this.scroll.finishPullUp()
        })

        // 监听滚动的高度
        this.scroll.on('scroll' , (position) => {
          this.$emit("contentScroll" , position)
        })

        // 监听滚动完成
        this.scroll.on("scrollEnd" , () => {
          this.$emit("scrollEnde")
        })
      },
      returnTop() {
        this.scroll.scrollTo(0 , 0 , 500)
      }
    }
  }
</script>

<style scoped>

</style>