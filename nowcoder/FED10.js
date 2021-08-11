/* 描述
将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
1. rgb 中每个 , 后面的空格数量不固定
2. 十六进制表达式使用六位小写字母
3. 如果输入不符合 rgb 格式，返回原始输入

输入：
'rgb(255, 255, 255)'

输出：
#ffffff

*/

function rgb2hex(sRGB) {
  try{
      return eval(sRGB)
  }
  catch(err){
      return sRGB
  }
}
function rgb(r,g,b){
  let rH=r.toString(16)
  let gH=g.toString(16)
  let bH=b.toString(16)
  rH=rH.length==1?'0'+rH:rH
  gH=gH.length==1?'0'+gH:gH
  bH=bH.length==1?'0'+bH:bH
  return "#"+rH+gH+bH
}


/* 
  function rgb2hex(sRGB) {
    if (!/^rgb\((\d{1,3},\s*){2}\d{1,3}\)$/.test(sRGB)) return sRGB;
    let  color = '#';
    sRGB.replace(/\d+/g, n => color += ('0' + (+n).toString(16)).slice(-2));
    return color;
  }
*/


/* 
  # Number.prototype.toString()

  语法
  numObj.toString([radix])

*/