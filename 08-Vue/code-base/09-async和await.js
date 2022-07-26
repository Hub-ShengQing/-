import fs from 'then-fs'

console.log('a')

async function getFile() { 
  console.log('b')
  const r1 = await fs.readFile('./01-默认导出.js', 'utf8')
  console.log(r1)
  console.log('d')
}

getFile()
console.log('c') 