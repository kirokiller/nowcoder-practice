/* 
new 的作用
  1、首先创建了一个新的空对象
  2、设置原型，将对象的原型设置为函数的prototype对象
  3、让函数的this指向这个对象，
  4、判断函数的返回类型，如何是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象
*/



function myNew() {
  let obj = {};
  let [construct, ...params] = [...arguments];
  obj.__proto__ = construct.prototype;
  const ret = construct.apply(obj, params); 
  return (ret && ret instanceof Object) ? ret : obj
}

// test
function A(name) {
  this.name = name
}
var a1 = myNew(A, 'Lee')
var a2 = new A('Lee')
console.log(a1, a2)