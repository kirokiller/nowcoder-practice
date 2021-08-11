
// 与call方法类似，获取数组参数

Function.prototype.myApply = function(context) {
  const fn = Symbol('fn');
  const argArr = arguments[1] || [];
  context = context || window
  context[fn] = this;
  const res = context[fn](...argArr);
  Reflect.deleteProperty(context, fn);
  return res;
}

const fn = function(p1, p2) {
  return this.a+this.b+p1+p2;
};

const obj = {
  a: 1,
  b: 2,
}


console.log(fn.myApply(obj, [3, 4]));
