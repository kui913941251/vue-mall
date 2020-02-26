export default {
  addGoods({state , commit} , payload) {
    let id = payload.product.iid
    let result = state.cartList.find(function (item) {
      return item.iid === id
    })
    if (result) {
      // result.count++
      // payload.callBack("商品数量+1")
      commit("addGoodsCount" , {result , payload})
    }else {
      payload.product.count = 1
      payload.product.checked = true
      // state.cartList.push(payload.product)
      // payload.callBack("购物车添加成功")
      commit("addGoods" , payload)
    }
  },
  clearAccount({state , commit}) {
    // 点击结算后，找出购物车中被选中的商品，并移除
      for(let i = 0 ; i < state.cartList.length ; i++) {
        if (state.cartList[i].checked === true) {
          commit("clearAccount" , i--)
        }
      }
    }

}