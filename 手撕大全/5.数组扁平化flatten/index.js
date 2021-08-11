// 把多维数组转化成一维数组

// 1.es6提供的新方法flat(depth)
let a = [1, [2, 3]];
// console.log(a.flat()); // [ 1, 2, 3 ]

a.flat(1);
// console.log(a.flat(1));  // [ 1, 2, 3 ]

let b = [1,[2,3,[4,[5]]]];
// console.log(b.flat(1));
// console.log(b.flat(Infinity)); // [ 1, 2, 3, [ 4, [ 5 ] ] ]


// 2.利用cancat
let arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]
function flatten(arr) {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}



// 3. 自定义Flat
Array.prototype.myFlat = function(depth = 1){  
  let arr = this;
  if(depth === 0){
    return arr;
  }
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      res = res.concat(Array.prototype.myFlat.call(arr[i], depth -1))
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

let arr = [1, [2, 3]]
console.log(arr.myFlat(0));




