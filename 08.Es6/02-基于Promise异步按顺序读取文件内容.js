import thenFs from 'then-fs'

thenFs
  .readFile('./files/1.txt','utf-8')
  .then((r1)=>{
    console.log(r1);
    return thenFs.readFile('./files/2.txt','utf-8')
})
  .then((r2)=>{
    console.log(r2);
    return thenFs.readFile('./files/3.txt','utf-8')
  })
  .then((r3)=>{
    console.log(r3);
  })
  .catch(err => { //捕获错误信息 如果不希望前面的错误导致后续的.then无法正常执行 则可以将.catch调用提前
    console.log(err.message);
  })