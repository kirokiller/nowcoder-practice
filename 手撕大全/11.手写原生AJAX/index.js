

/* 
  AJAX 包括以下几个步骤
    1、创建XMLHttpRequest对象，也就是创建一个异步调用对象
    2、创建一个新的HTTP请求，并制定HTTP请求的方法、URL及验证信息
    3、设置响应HTTP请求状态变化的函数
    4、发送HTTP请求
    5、获取异步调用返回的数据
    6、使用 JavaScript 和 DOM 实现局部刷新
*/

const SERVER_URL = '/server'

let xhr = new XMLHttpRequest();

// 创建 Http 请求 第三个参数为 async，制定请求是否为异步方式，默认为 true
xhr.open('GET', SERVER_URL, true)

// 设置请求头信息
xhr.responseType = 'json'
xhr.setRequestHeader('Accept', 'application/json')

// 设置状态监听函数
xhr.onreadystatechange = function() {
  if (this.readyState !== 4) return;

  // 当请求成功时
  if(this.status === 200) {
    // handle(this.responseText)
  } else {
    console.error(this.statusText)
  }
}


// 设置请求失败时的监听函数
xhr.onerror = function() {
  console.error(this.statusText)
}
// 发送 Http 请求
xhr.send(null)



// promise 封装实现
function getJSON(url) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if ( this.readyState !== 4) return

      if(this.status === 200) {
        resolve(this.responseText)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send(null);
  })
}
