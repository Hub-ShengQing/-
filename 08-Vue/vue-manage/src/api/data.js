/* 所有的接口请求 */
import axios from './axios' // 引入封装好的 axios

export const getMenu = (param) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'post',
    data: param,
  })
}

export const getData = () => {
  return axios.request({
    url: '/home/getData',
    method: 'get',
  })
}
