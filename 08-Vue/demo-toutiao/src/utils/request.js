import axios from 'axios'

const axiosESC = axios.create({
  baseURL: 'https://www.escook.cn'
})

export default axiosESC
