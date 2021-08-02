/* 
描述
用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
*/

function fibonacci(n) {
    if(n == 1 || n == 0){
      return n;
    }
    return fibonacci(n -1) + fibonacci(n -2);
}

function test() {
  return fibonacci(1) === 1 && fibonacci(2) === 1 && fibonacci(3) === 2 && fibonacci(4) === 3 
}

console.log(test());


/* 
  斐波那契数列以如下被以递推的方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）
*/