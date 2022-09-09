/* 利用 Mock 模拟后台接口 */
import Mock from 'mockjs'
import homeApi from './mockServeData/home.js'

Mock.mock('/api/home/getData', homeApi.getStatisticalData)
