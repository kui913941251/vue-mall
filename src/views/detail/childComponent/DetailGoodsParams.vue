<template>
  <div class="goods_params">
    <div class="params_info">
      <h4>{{goodsParams.info ? goodsParams.info.key : ""}}</h4>
      <table cellpadding="0" cellspacing="0">
        <tr v-for="item in goodsParams.info? goodsParams.info.set : []">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="params_size">
      <h4>{{goodsParams.rule? goodsParams.rule.key : ""}}</h4>
      <table>
        <tr v-for="item in goodsParams.rule? goodsParams.rule.tables[0] : []">
          <td class="key">{{item[0]}}</td>
          <td class="value">
            <span v-for="index in item.length - 1">
              {{item[index]}}
            </span>
          </td>
        </tr>
      </table>
      <div class="size_tip">
        <p>{{goodsParams.rule? goodsParams.rule.desc : ""}}</p>
        <p>{{goodsParams.rule? goodsParams.rule.disclaimer : ""}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailGoodsParams",
    props: {
      goodsParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods_params{
    padding: 10px;
  }

  .params_size {
    margin-top: 10px;
  }

  .size_tip{
    margin-top: 5px;
    font-size: 13px;
    color: #908f90;
  }
  .size_tip p{
    margin-top: 10px;
  }

  table{
    width: 100%;
    font-size: 15px;
  }
  table tr{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  table tr .key {
    flex: 2;
    color: #908f90;
  }
  table tr .value{
    flex: 8;
    color: #e58a97;
  }
  table tr .value span{
    margin-right: 10px;
    flex: 1;
  }
  table tr td{
    display: flex;
    align-items: center;
  }
  h4{
    font-weight: normal;
  }
</style>