// 1、引入 express
const express = require('express')

// 2. 创建应用对象
var app = express()

// 3. 创建路由规则
// 当对主页发出 GET 请求时，响应 “hello world”
// req 是请求报文的封装，res 是响应报文的封装
app.get('/', function (req, res) {
  res.send('hello world')
})

// 4. 监听端口启动服务
app.listen(8000, () => {
  console.log('服务启动')
})
