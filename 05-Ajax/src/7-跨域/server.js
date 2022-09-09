// 1、引入 express
const express = require('express')

// 2. 创建应用对象
var app = express()
app.get('/home', function (req, res) {
  // 设置响应体
  // res.send('同源策略')
  res.sendFile(__dirname + '/01-同源策略.html')
})

app.get('/data', function (req, res) {
  // 设置响应体
  res.send('你好')
})

app.get('/get-data', function (req, res) {
  let cb = req.query.callback
  let str = JSON.stringify('你好')
  res.end(`${cb}(${str})`)
})

app.all('/check-username', function (req, res) {
  let tip = JSON.stringify('该用户名已经存在')
  res.end(`handle(${tip})`)
})

app.all('/cors-server', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('Hello CORS')
})

// 4. 监听端口启动服务
app.listen(9000, () => {
  console.log('服务启动')
})
