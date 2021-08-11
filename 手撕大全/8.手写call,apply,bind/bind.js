

// 原生bind
// 1、返回绑定函数
// 2、可以有预置入参数
// 语法：function.bind(thisArg[, arg1[, arg2[, ...]]])
// arg1, arg2, ...
// 当目标函数被调用时，被预置入绑定函数的参数列表中的参数。


const fn = function(p1, p2, p3, p4) {
  return this.a+this.b+p1+p2+p3+p4;
};

const obj = {
  a: 1,
  b: 2,
}

// 使用箭头函数绑定this
Function.prototype.myBind = function(ctx, ...arg1) {
  return (...arg2) => {
    this.call(ctx, ...arg1,...arg2)
  }
}

const res = fn.myBind(obj, 1, 2)(3, 4);

console.log(res);
