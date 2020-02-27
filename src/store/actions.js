export default {
  addGoods({state , commit} , payload) {
    return new Promise((resolve , reject) => {
      let id = payload.iid
      let result = state.cartList.find(function (item) {
        return item.iid === id
      })
      if (result) {
        commit("addGoodsCount" , result)
        resolve("商品数量+1")
      }else {
        payload.count = 1
        payload.checked = true
        commit("addGoods" , payload)
        resolve("商品添加成功")
      }
    })
  },
  clearAccount({state , commit}) {
    return new Promise((resolve , reject) => {
      if (!state.cartList.find(item => item.checked)) resolve("请选择商品")
      // 点击结算后，找出购物车中被选中的商品，并移除
      for(let i = 0 ; i < state.cartList.length ; i++) {
        if (state.cartList[i].checked === true) {
          commit("clearAccount" , i--)
          resolve("商品结算成功")
        }
      }
    })
  }

}