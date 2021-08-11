Promise.all = function(iterator) {
  if(!Array.isArray(iterator)) return;
  let count = 0;
  let res = [];
  return new Promise((resolve, reject) => {
    for(let item of iterator) {
      Promise.resolve(item).then(data => {
        res[count++] = data;
        if(count === iterator.length) {
          resolve(res);
        }
      }).catch(e => {
        reject(e);
      })
    }
  })
}


// test
let p1 = Promise.resolve(3);
let p2 = 4;
let p3 = new Promise(resolve => {
  setTimeout(resolve, 100, 'lee')
  // setTimeout的第三个往后参数都是用来作为第一个参数也就是函数的参数,也就是其实是setTimeout(resolve('lee'), 100)
});
Promise.all([p1, p2, p3]).then(data => {
  console.log(data);
})