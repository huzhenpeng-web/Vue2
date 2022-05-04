import thenFs from 'then-fs'

const promiseArr = [
  thenFs.readFile('./files/1.txt','utf-8'),
  thenFs.readFile('./files/2.txt','utf-8'),
  thenFs.readFile('./files/3.txt','utf-8')
]

// Promise.all(promiseArr).then(result => { //拿到所有数据
//   console.log(result);
// })

Promise.race(promiseArr).then(result => { //谁执行的快拿到谁的
  console.log(result);
})