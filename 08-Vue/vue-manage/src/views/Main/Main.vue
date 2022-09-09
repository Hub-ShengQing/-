<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <!-- 用户简介卡片 -->
      <el-card class="user-card" shadow="hover">
        <div class="user-profile">
          <!-- 用户头像 -->
          <el-avatar
            :src="userImg"
            :size="100"
            class="user-picture"
            fit="fill"
            icon="el-icon-user-solid"
          ></el-avatar>
          <!-- 用户信息 -->
          <div class="user-info">
            <span>{{ userName }}</span>
            <br />
            <span>{{ userRole }}</span>
          </div>
        </div>
        <!-- 登录信息 -->
        <div class="login-info">
          上次登录时间：
          <span>{{ loginTime }}</span>
          <br />
          上次登录地点：
          <span>{{ loginLocation }}</span>
        </div>
      </el-card>

      <!-- 语言卡片 -->
      <el-card class="lang-card" shadow="hover">
        <div class="card-title">语言详情</div>
        <div class="progress-title">
          Vue<el-progress
            :text-inside="true"
            :stroke-width="20"
            :percentage="70"
            :color="customColors[3]"
          >
          </el-progress>
          HTML<el-progress
            :text-inside="true"
            :stroke-width="20"
            :percentage="50"
            :color="customColors[2]"
          ></el-progress>
          CSS<el-progress
            :text-inside="true"
            :stroke-width="20"
            :percentage="40"
            :color="customColors[1]"
          ></el-progress>
          JavaScript<el-progress
            :text-inside="true"
            :stroke-width="20"
            :percentage="30"
            :color="customColors[0]"
          ></el-progress>
        </div>
      </el-card>
    </el-col>

    <el-col :span="16">
      <!-- 数据卡片 -->
      <div class="count-container">
        <el-card
          class="count-card"
          shadow="hover"
          :body-style="{
            display: 'flex',
            padding: 0,
          }"
          v-for="item in countData"
          :key="item.name"
        >
          <i
            class="icon-count"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="count-text">
            <span>{{ item.value }}</span>
            <br />
            <span>{{ item.name }}</span>
          </div>
        </el-card>

        <!-- 表格卡片 -->
        <el-card shadow="hover">
          <div class="card-title">销量统计</div>
          <el-table height="242" stripe :data="tableData">
            <el-table-column
              show-overflow-tooltip
              v-for="(val, key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val"
            ></el-table-column>
          </el-table>
        </el-card>

        <!-- 图表卡片 -->
        <el-card shadow="hover">
          <div class="card-title">上周情况</div>
          <div class="graph-container" ref="echarts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from '@/api/data.js'
import * as echarts from 'echarts'

export default {
  name: 'mainPage',
  data() {
    return {
      userImg: require('@/assets/img/user-avator.jpg'),
      userName: '王巨星',
      userRole: '超级管理员',
      loginTime: '2022-08-14',
      loginLocation: '中国·重庆',
      customColors: ['#53D99D', '#4CBBFF', '#FF5723', '#FF2B11'],
      countData: [
        {
          name: '今日支付订单',
          value: 764,
          icon: 'success',
          color: '#FF5723',
        },
        {
          name: '今日收藏订单',
          value: 230,
          icon: 'star-on',
          color: '#4CBBFF',
        },
        {
          name: '今日未支付订单',
          value: 344,
          icon: 's-goods',
          color: '#53D99D',
        },
        {
          name: '本月支付订单',
          value: 3334,
          icon: 'success',
          color: '#FF5723',
        },
        {
          name: '本月收藏订单',
          value: 2040,
          icon: 'star-on',
          color: '#4CBBFF',
        },
        {
          name: '本月未支付订单',
          value: 1004,
          icon: 's-goods',
          color: '#53D99D',
        },
      ],
      tableData: [],
      tableLabel: {
        name: '品牌',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买',
      },
    }
  },
  methods: {
    getTableData() {},
  },
  created() {
    this.getTableData()
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data
      if (code === 20000) {
        this.tableData = data.tableData
        const orderData = data.orderData
        console.log(orderData)
        const seriesData = []
        const keyArray = Object.keys(orderData.data[0])

        keyArray.forEach((key) => {
          seriesData.push({
            name: key,
            type: 'line',
            stack: 'Total',
            data: orderData.data.map((item) => item[key]),
          })
        })

        const option = {
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: orderData.name,
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: orderData.date,
          },
          yAxis: {
            type: 'value',
          },
          series: seriesData,
        }

        console.log(this.$refs.echarts)

        const myChart = echarts.init(this.$refs.echarts)
        myChart.setOption(option)
      }
    })
  },
}
</script>

<style lang="less" scoped>
.user-card {
  color: @color-gray;
  font-size: 14px;
}

.user-profile {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid @color-gray;
}

.user-info {
  display: inline-block;
  padding-left: 50px;
  line-height: 1.4;

  span:first-child {
    color: @color-dark;
    font-size: 30px;
  }
}

.login-info {
  padding-top: 20px;
  line-height: 2;

  span {
    margin-left: 5em;
  }
}

.lang-card {
  margin-top: 20px;
  color: @color-dark;
  font-size: 15px;
}

.card-title {
  padding-bottom: 10px;
  border-bottom: 1px solid @color-gray;
  margin-bottom: 10px;
  font-size: 18px;
}

.el-progress {
  margin: 5px 0;
}

.count-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .count-card {
    width: 32%;
    margin-bottom: 20px;
  }

  .icon-count {
    width: 80px;
    height: 80px;
    color: @color-white;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
  }

  .count-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    color: @color-gray;
    font-size: 14px;

    span:first-child {
      color: @color-dark;
      font-size: 30px;
    }
  }
}

.graph-container {
  width: 330px;
  height: 242px;
}
</style>
