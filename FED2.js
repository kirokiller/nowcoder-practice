
/* 
描述
获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组
4. 不支持URLSearchParams方法
示例1
输入：http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key
输出：[1, 2, 3]
*/
function getUrlParam(sUrl, sKey) {
  const paramsArray = sUrl.split('?')[1].split('#')[0].split('&');
  const obj = {};
  paramsArray.forEach(item => {
    const [key, value] = item.split('=');
    if(obj[key] === void 0) {
      obj[key]=value
    } else {
      obj[key]=[].concat(obj[key], value);
    }
  })
  return sKey===void 0? obj:obj[sKey]||''
}

function test() { 
  var a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test=4#hehe', 'key');
  return a.join('') === '1234';
}

console.log(test());

/* 
  node12低版本解析<?.>链选操作符有问题，建议不使用

  // 使用这则获取url参数
  function getQueryObject(url) {
  　url = url == null ? window.location.href : url;  
    let search = url.substring(url.lastIndexOf("?") + 1);
    let obj = {};     
    let reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function (rs, $1, $2) {
      let name = decodeURIComponent($1);
      let val = decodeURIComponent($2);
      val = String(val);
      obj[name] = val;
      return rs;
    });
    return obj;
  }

  String.prototype.replace()参考链接https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace

*/