function mineReadFile(path) {
  return new Promise((reslove, reject) => {
    require('fs').readFile(path, (err, data) => {
      if (err) reject(err)
      reslove(data)
    })
  })
}

mineReadFile('./诗.txt').then(
  (value) => {
    console.log(value.toString())
  },
  (reason) => {
    console.log(reason)
  }
)
