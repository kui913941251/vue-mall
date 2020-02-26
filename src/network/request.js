import axios from "axios"

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/hy",
    timeout: 5000
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // 对响应数据做点什么
    return res.data;
  },err => {
    console.log(err)
  })
  return instance(config)
}