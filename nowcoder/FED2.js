
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
  const paramsArray = sUrl.split('?')[1]?.split('#')[0]?.split('&');
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

  ```js
  const obj = {
    foo: {
      bar: {
        baz: 42,
        fun: ()=>{}
      },
    },
  };

  // 不使用?.
  let baz = obj && obj.foo && obj.foo.bar && obj.foo.bar.baz;

  // 使用?.
  let baz = obj?.foo?.bar?.baz; // 结果：42
  ```

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

  # Array.prototype.slice()

  ## 语法

  ```
  arr.slice([begin[, end]])
  ```

  slice() 方法返回一个新的额数组对象，这个对象是由 begin 和 end 决定的原数组的浅拷贝（包括begin，不包括end）。原始数组不会被改变

  ## 类数组（Array-like）对象

  slice 方法可以用来将一个类数组（Array-like）对象/几核转换成一个新数组。你只需将该方法绑定到这个对象上
  ```
    fuction list() {
      return Array.prototype.slice.call(arguments); // [].slice.call(arguments)
    }

    var list1 = list(1, 2, 3) // [1, 2, 3]
  ```


  # void 0 === undefined

*/