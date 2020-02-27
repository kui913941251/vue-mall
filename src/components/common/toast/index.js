import Toast from "./Toast";

const obj = {
  install(Vue) {
    // 创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    // 创建组件实例
    const toast = new toastConstructor()
    // console.log(toast)

    // 将组件实例对象渲染到dom对象上
    toast.$mount(document.createElement("div"))
    // console.log(toast)

    // 将dom对象添加至body
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
  }
}

export default obj