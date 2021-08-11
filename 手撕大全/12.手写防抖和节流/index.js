
// 防抖
// 函数抖动：在事件被处罚 n 秒后再执行回调，如果在这 n 秒内事件又被处罚，则重新计时
function debounce(fn, delay) {
  let timer;  // 维护一个timer
  return function() {
    let _this = this;
    if(timer){
      clearTimeout(timer)
    }
    let args = [...arguments];
    timer = setTimeout(function() {
      fn.aply(_this, args)
    }, delay)
  }
}

// 节流
// 函数节流：规定一个单位事件，在这个单位时间内，只能有一次处罚时间的回调函数执行，如果在同一个单位时间内某时间被触发多次，只有一次能生效
function throttle(fn, delay) {
  let timer;
  return function() {
    let _this = this;
    const arg = [...arguments];
    if(timer) {
      return
    }
    timer = setTimeout(function(){
      fn.apply(_this, arg);
      timer = null;
    }, delay)
  }
}







