export default {
  addGoods(state , payload) {
    state.cartList.push(payload.product)
    payload.callBack("购物车添加成功")
  },
  addGoodsCount(state , payload) {
    payload.result.count++
    payload.payload.callBack("商品数量+1")
  },
  clearAccount(state , index) {
    state.cartList.splice(index , 1)
  }
}