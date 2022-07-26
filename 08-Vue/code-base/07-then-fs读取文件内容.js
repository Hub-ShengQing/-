import thenFs from 'then-fs'

thenFs
  .readFile('11.txt', 'utf8')
  .catch(err => {
    console.log(err.message)
  })