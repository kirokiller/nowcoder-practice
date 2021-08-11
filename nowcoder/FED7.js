/* 
描述
按所给的时间格式输出指定的时间
格式说明
对于 2014.09.05 13:14:20
yyyy: 年份，2014
yy: 年份，14
MM: 月份，补满两位，09
M: 月份, 9
dd: 日期，补满两位，05
d: 日期, 5
HH: 24制小时，补满两位，13
H: 24制小时，13
hh: 12制小时，补满两位，01
h: 12制小时，1
mm: 分钟，补满两位，14
m: 分钟，14
ss: 秒，补满两位，20
s: 秒，20
w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五

输入：
formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')

输出：
2014-09-05 13:14:20 星期五

*/

function formatDate(date, format) {
  const addZero = function(val) {
    if(val < 10) {
      return '0' + val;
    }
    return val;
  }
  const obj = {
    'yyyy': date.getFullYear(),
    'yy': date.getFullYear() % 100,
    'MM': addZero(date.getMonth()  + 1),
    'M': date.getMonth() + 1,
    'dd': addZero(date.getDate()),
    'd': date.getDate(),
    'HH': addZero(date.getHours()),
    'H': date.getHours(),
    'hh': addZero(date.getHours() % 12),
    'h': date.getHours() % 12,
    'mm': addZero(date.getMinutes()),
    'm': date.getMinutes(),
    'ss': addZero(date.getSeconds()),
    's': date.getSeconds(),
    'w': ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
  }
  for (let i in obj) {
    format  = format.replace(i, obj[i])
  }
  return format;
}

console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'));


/* function formatDate(date, format = "yyyy-MM-dd HH:mm:ss 星期w") {
  debugger;
  var o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "H+" : date.getHours(),                   //24小时
    "h+":date.getHours()>12?date.getHours()-12:date.getHours(), //12小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds(),                 //秒
     "w" :"日一二三四五六".charAt(date.getDay())

  };
  // 年份
  if(/(y+)/.test(format)){
      //与正则表达式匹配的第一个 子匹配(以括号为标志)字符串  RegExp.$1
    format=format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  }

  for(var k in o){
    if(new RegExp("("+ k +")").test(format)){
      format = format.replace(
        RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
    }       
  }

  return format;
} */


/* 
  # RegExp(正则表达式)
  ECMAScript 3中正则表达式字面量始终会共享同一个RegExp实例，而使用构造函数创建的每一个新RegExp实例都是一个新实例
*/