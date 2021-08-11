
Array.prototype.myMap = function(fn, thisValue){
  thisValue = thisValue || [];
  let arr = this;
  let res = [];
  arr.reduce(function (pre, cur, index){
    res.push(fn.call(thisValue, cur, index, arr))
  }, []);
  return res;
}

let arr = [1, 2, 3];
let res = arr.myMap(function fn(item){
  return item;
})

console.log(res);

