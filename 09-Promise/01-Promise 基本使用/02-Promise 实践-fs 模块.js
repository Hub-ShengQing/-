// 导入 fs 模块
const fs = require('fs')

// fs.readFile('./诗.txt', (err, data) => {
//   if (err) throw err
//   console.log(data.toString())
// })

const p = new Promise((reslove, reject) => {
  fs.readFile('./诗.txt', (err, data) => {
    if (err) reject(err)
    reslove(data.toString())
  })
})

p.then(
  (value) => {
    console.log(value)
  },
  (reason) => {
    throw reason
  }
)
