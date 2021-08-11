/* 
描述
为 Array 对象添加一个去除重复项的方法
示例1
输入：
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
复制
输出：
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a'] 
*/

Array.prototype.uniq = function () {  
  return Array.from(new Set(this))
}

let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];

function test() {
  var a = [true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq();
  return a.length === 10 && a[1] === false && a[0] === true && a[3] === undefined && a[2] === null && isNaN(a[4]);
}

console.log(test());


/* 
  # Array,from()
  Array.from() 方法从一个类似数组活可迭代对象创建一个新的，浅拷贝的数组实例

  ## 语法
  ```
  Array.from(arrayLike[, mapFn[, thisArg]])
  ```
  * arrayLike
  想要转换成数组的伪数组对象或可迭代对象。
  * mapFn 可选
  如果指定了该参数，新数组中的每个元素会执行该回调函数。
  * thisArg 可选
  可选参数，执行回调函数 mapFn 时 this 对象。

  
  ## 返回值
  一个新的数组实例





  # Set
  
  Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用

  Set加入值时不会发生类型转换，Set内部判断两个值是否相同时使用的算法叫做“Same-value equality”，
  它类似于精确相等运算符（===），主要的区别是NaN之间被视为相同值，具体来说，对于 Set s， +0 （+0 严格相等于-0）和-0是不同的值。然而，在 ECMAScript 2015规范中这点已被更改。


  */

