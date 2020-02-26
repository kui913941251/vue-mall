import Vue from "vue";
import Vuex from "vuex"

import mutations from "./mutations";
import actions from "./actions";

// 1.安装Vuex插件
Vue.use(Vuex)

const state = {
  cartList: []
}

// 2.创建实例
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

// 3.导出实例，挂在到main.js上
export default store