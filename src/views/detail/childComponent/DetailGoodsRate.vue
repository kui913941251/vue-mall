<template>
  <div class="goods_rate">
    <h4>
      用户评价
      <span>更多</span>
    </h4>
    <div v-if="rate.list != undefined">
      <div v-for="item in rate.list">
        <div class="user_info">
          <img :src="item.user.avatar" alt="">
          <span>{{item.user.uname}}</span>
        </div>
        <div class="rate_content">
          {{item.content}}
        </div>
        <div class="rate_other">
          <span>{{getDate(item.created , "-")}}</span>
          <span>{{item.style}}</span>
        </div>
        <div class="rate_img">
        </div>
      </div>
    </div>
    <div v-else>暂无</div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsRate",
    props: {
      rate: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      getDate(value , type) {
        let date = new Date(value * 1000)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        return year + type + month + type + day
      }
    }
  }
</script>

<style scoped>
  .goods_rate{
    margin: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ddd;
  }

  h4{
    font-weight: normal;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
  }
  h4 span{
    font-size: 13px;
    float: right;
  }

  .user_info{
    line-height: 50px;
  }
  .user_info img{
    width: 40px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid #eee;
  }
  .user_info span{
    margin-left: 5px;
    font-size: 15px;
  }

  .rate_content{
    font-size: 12px;
    color: #999;
    line-height: 1.5em;
  }

  .rate_other span{
    color: #908f90;
    font-size: 10px;
    margin-right: 10px;
  }
</style>