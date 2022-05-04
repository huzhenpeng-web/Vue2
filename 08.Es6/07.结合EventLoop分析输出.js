import thenFs from 'then-fs'

console.log('A'); //同步
thenFs.readFile('./files/1.txt','utf8').then(dataStr =>{ //耗时任务 加入到任务队列 等到主线程空闲后执行
  console.log('B');
})

setTimeout(()=>{
  console.log('C');
},0)

console.log('D'); //同步