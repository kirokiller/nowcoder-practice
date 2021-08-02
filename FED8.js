/* 
描述
如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
否则如果字符 Unicode 编码 > 255 则长度为 2

示例1
输入：
'hello world, 牛客', false

输出：
17
*/
function strLength(s, bUnicode255For1) {
  let sum = 0;
  for(let i in s){
    sum = sum + (bUnicode255For1 ? 1 : (s.charCodeAt(i) > 255 ? 2 : 1));
  }
  return sum
}



console.log(strLength());





