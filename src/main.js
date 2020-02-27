import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import FastClick from "fastclick"
import LazyLoad from "vue-lazyload"

import toast from "components/common/toast/index"
// 安装toast
Vue.use(toast)

// 添加swiper
import 'swiper/dist/css/swiper.css'
//（如果使用的是2.6.0以上的版本需要自己手动去加载css）
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// 添加事件总线
Vue.prototype.$bus = new Vue()

// 使用fastclick
FastClick.attach(document.body)

// 使用lazyload
Vue.use(LazyLoad)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
