/* Mock 模拟首页相关数据 */
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 折线图
        orderData: {
          name: ['苹果', 'vivo', 'oppo', '三星', '小米'],
          date: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: List,
        },
        // 表格数据
        tableData: [
          {
            name: 'oppo',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(3000, 5000, 0, 0),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 0),
          },
          {
            name: 'vivo',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(3000, 5000, 0, 0),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 0),
          },
          {
            name: '苹果',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(3000, 5000, 0, 0),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 0),
          },
          {
            name: '小米',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(3000, 5000, 0, 0),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 0),
          },
          {
            name: '三星',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(3000, 5000, 0, 0),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 0),
          },
        ],
      },
    }
  },
}
