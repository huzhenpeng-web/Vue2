setTimeout(function () {
  console.log('1'); //宏任务
})

new Promise(function (resolve) { //同步任务
  console.log('2');
  resolve()
}).then(function () { //微任务
  console.log('3');
})

console.log('4'); //同步任务

// 2-4-3-1

// 同步任务 - 微任务 -宏任务

// 1-5-6-2-3-4-7-8-9 