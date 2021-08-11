function reduce(arr, fn, initialValue){
  const len = arguments.length;
  let i = len >= 3 ? 0 : 1;
  let res = len >=3 ? initialValue : arr[0];
  for(i; i < arr.length; i++){
      res = fn(res, arr[i], i, arr)
  }
  return res;
}

// 无initialValue时，默认取数组第一项为初始值，fn执行次数会少一次
Array.prototype.myReduce = function(fn, initialValue){
  let arr = this;
  const len = arguments.length;
  let i = len >= 2 ? 0 : 1;
  let res = len >=2 ? initialValue : arr[0];
  for(i; i < arr.length; i++){
    res = fn(res, arr[i], i, arr)
  }
  return res;
}

let arr = [1, 2];

let res = arr.myReduce((pre, item, index) => {
  return pre + item;
}, 0)

console.log(res)
