/* 
  闭包
  闭包在处理速度和内存消耗方面对脚本性能具有负面影响
*/

// 常见错误：在循环中创建闭包
function closure() {
  for(var i = 0; i<10; i++){
    setTimeout(function itmer(){
      console.log(i);
    }, 1000)
  }
}

// 解决办法
// 创建另一个另一个匿名函数
function closure2() {
  for(var i = 0; i<10; i++){
    (function(j) {
      setTimeout(function itmer(){
        console.log(j);
      }, 1000)
    })(i)
  }
}


// 使用let
function closure3() {
  for(let i = 0; i<10; i++){
    setTimeout(function itmer(){
      console.log(i);
    }, 1000)
  }
}

closure3()

// 闭包最重要的一个作用就是把某些变量隐藏起来，让外面的程序补鞥呢直接访问。
/* 
  var init = (function()　{
      var isInited = false;

      return function() {
          if (isInited) {
              return;
          }
          isInited = true;

          // 初始化只能进行一次，下面是初始化的代码
      };
  })();
*/