console.log('1'); //同步任务

setTimeout(function () { //宏任务
  console.log('2'); // 同步任务
  new Promise(function (resolve){ //同步任务
    console.log('3');
    resolve();
  }).then(function (){
    console.log('4'); //微任务
  })
})

new Promise(function(resolve){ //同步任务
  console.log('5'); //同步任务
  resolve();
}).then(function(){ //微任务
  console.log('6');
})

setTimeout(function (){ //宏任务
  console.log('7'); //同步任务
  new Promise(function(resolve){ //同步任务
    console.log('8'); //同步任务
    resolve();
  }).then(function(){ //微任务
    console.log('9');
  })
})

//同步任务-在查看同步任务是否有微任务-宏任务-宏任务是否有微任务-下一个宏任务
//最终输出顺序: 1-5-6-2-3-4-7-8-9