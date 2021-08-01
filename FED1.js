/*  
描述
封装函数 f，使 f 的 this 指向指定的对象
*/

function bindThis(f, oTarget) {
  const otherArguments = Array.prototype.slice.call(arguments, 2);
  return function() {      
    return f.apply(oTarget, [].concat(Array.prototype.slice.call(arguments)), otherArguments);
  }
}


const oTarget = {
  name: 'myObj'
}

function add() {
  const sum = Array.prototype.slice.call(arguments).reduce((total, current) => {
    return total + current;
  }, 0);
  return {
    name: this.name,
    sum,
  } 
}

function test() {
  const result = bindThis(add, oTarget)(1, 2);
  console.log(result);
}

test();




/* 
  # slice
  ## 语法
  
  ```
  arr.slice([begin[, end]])
  ```
  
  ## 返回值
  一个含有被提取元素的新数组
  ## 类数组（Array-like）对象
  slice 方法可以用来将一个类数组（Array-like）对象/几核转换成一个新数组。你只需将该方法绑定到这个对象上

  ```js
  function list() {
    return Array.prototype.slice(arguments);
  }

  var list1 = list(1, 2, 3), // [1, 2, 3]
  ```



*/