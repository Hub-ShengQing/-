// 1、引入 express
const express = require('express')

// 2. 创建应用对象
var app = express()

// 3. 创建路由规则
// 当对主页发出 GET 请求时，响应 “hello world”
// req 是请求报文的封装，res 是响应报文的封装
app.get('/server/get', function (req, res) {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')

  // 设置响应体
  res.send('hello world')
})

// 针对 IE 浏览器
app.get('/server/ie-get', function (req, res) {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')

  // 设置响应体
  res.send('hello IE 缓存')
})

// 延时响应
app.all('/server/delay-get', function (req, res) {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  setTimeout(() => {
    // 设置响应体
    res.send('延时响应')
  }, 3000)
})

app.all('/server/post', function (req, res) {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')

  // 设置响应体
  res.send('hello world')
})

app.all('/json-server', function (req, res) {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  // 相应一个结果
  const data = {
    name: 'sq',
    age: '18',
  }

  let str = JSON.stringify(data)

  // 设置响应体
  res.send(str)
})

// 4. 监听端口启动服务
app.listen(8990, () => {
  console.log('服务启动')
})
