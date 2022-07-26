import fs from 'then-fs'

function getFile(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}

getFile('./01-默认导出.js').then(
  (r1) => {
    console.log(r1)
  },
  (err) => {
    console.log(err.message)
  }
)
