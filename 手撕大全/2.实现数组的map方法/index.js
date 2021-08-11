Array.prototype.myMap = function(fn, thisValue){
  let res = [];
  thisValue = thisValue || [];
  let arr = this;
  for(let i of arr) {
    res.push(fn(i));
  }
  return res;
}


Array.prototype.myMap2 = function(fn, constxt){
  constxt = constxt || [];
  let arr = this;
  let res = [];
  for(let key in arr){
    if(this.hasOwnProperty(key)){
      res.push(fn.call(constxt, arr[key], key))
    }
  }
  return res;
}

let arr = [1, 2, 3];
let res = arr.myMap2(function fn(item){
  return item;
})

console.log(res);


