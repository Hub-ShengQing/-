/* 主要是对 axios 进行简单的二次封装 */
import axios from 'axios'
import config from '../config'

/* 判断当前运行环境 */
const baseURL =
  process.env.NODE_ENV === 'development'
    ? config.baseURL.dev
    : config.baseURL.pro

/* 封装 axios 工具类 */
class HttpRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  /* 定义配置的初始值 */
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      header: {}, // 请求头信息
    }
    return config
  }

  /* 定义拦截器部分，instance 是 axios 的实例 */
  interceptors(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        return Promise.reject(error)
      }
    )
  }

  /* 接口请求，接收相关配置 */
  request(options) {
    const instance = axios.create()
    options = { ...this.getInsideConfig(), ...options } // ... 解构
    this.interceptors(instance) // 调用拦截器
    return instance(options)
  }
}

export default new HttpRequest(baseURL) // 导出工具类实例
