/* 
  函数的柯里化：curry（又叫部分求职）
  把接收多个参数的函数变成接收一个参数的函数，并返回一个新的函数；
  实现方法：用一个闭包，返回一个函数，这个函数每次执行都会改写 储存参数的数组，当函数的参数够了之后，便会执行
*/


/**
 * 将函数柯里化
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数，默认为原函数的形参个数
 */
function curry(fn,len = fn.length) {
  return _curry.call(this,fn,len)
 }
  
 /**
  * 中转函数
  * @param fn    待柯里化的原函数
  * @param len   所需的参数个数
  * @param args  已接收的参数列表
  */
 function _curry(fn,len,...args) {
    return function (...params) {
      let _args = [...args,...params];
      if(_args.length >= len){
          return fn.apply(this,_args);
      }else{
        return _curry.call(this,fn,len,..._args)
      }
    }
 }

 let _fn = curry(function(a,b,c,d,e){
  console.log(a,b,c,d,e)
 });
  
 _fn(1,2,3,4,5);     // print: 1,2,3,4,5
 _fn(1)(2)(3,4,5);   // print: 1,2,3,4,5
 _fn(1,2)(3,4)(5);   // print: 1,2,3,4,5
 _fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5
 
 