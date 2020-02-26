import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";

import 'swiper/dist/css/swiper.css'
//（如果使用的是2.6.0以上的版本需要自己手动去加载css）
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
