let mineReadFile = require('util').promisify(require('fs').readFile)

mineReadFile('./诗.txt').then(
  (value) => {
    console.log(value.toString())
  },
  (reason) => {
    throw reason
  }
)
