export default {
  addGoods(state , payload) {
    state.cartList.push(payload)
  },
  addGoodsCount(state , payload) {
    payload.count++
  },
  clearAccount(state , index) {
    state.cartList.splice(index , 1)
  }
}