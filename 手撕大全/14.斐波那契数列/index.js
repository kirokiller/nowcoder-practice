/* 
斐波那契数列以如下被以递推的方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）
*/
/* 
  递归
  时间复杂度O(2^N) 空间复杂度O(1)
*/
function fiber(n) {
  if(n === 0 || n===1){
    return n;
  }
  return fiber(n -1) + fiber(n-1);
}

/* 
  DP 动态规划
  时间复杂度O(N) 空间复杂度O(N)
*/

function fiber2(n) {
  if(n === 0 || n===1){
    return n;
  }
  let dp = [0, 1];
  for(let i = 2; i <=n; i++){
    dp[i] = dp[i-2] + dp[i-1];
  }
  return dp[n];
}


/* 
  循环
  时间复杂夫O(N) 空间复杂度O(1)
*/

function fiber3(n) {
  if(n === 0 || n===1){
    return n;
  }
  let ret =1;
  let a = 0;
  let b = 1;
  for(let i=2; i<n; i++){
    a = b;
    b = ret;
    ret = a + b;
  }
  return ret;
}


