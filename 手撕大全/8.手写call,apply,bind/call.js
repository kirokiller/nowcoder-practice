


// ...任何Iterator 接口的对象都可以用扩展运算符转为真正的对象


// 1、将函数设为目标对象的属性（或方法）
// 2、通过改对象的属性调用该函数
// 3、删除该对象上的这个属性（或方法）
Function.prototype.myCall = function (context) {
  const fn = Symbol('fn')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  context = context || window
  context[fn] = this
  const args = [...arguments].slice(1)
  const result = context[fn](...args)
  delete context[fn]
  // Reflect.deleteProperty(context, fn);
  return result
}

let fn = function(p1, p2) {
  return this.a+this.b+p1+p2;
};

let obj = {
  a: 1,
  b: 2,
}


console.log(fn.myCall(obj, 3, 4));
