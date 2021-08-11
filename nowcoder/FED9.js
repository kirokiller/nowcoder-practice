/* 描述
判断输入是否是正确的邮箱格式
输入描述：
邮箱字符串
输出描述：
true表示格式正确 */

function isAvailableEmail(sEmail) {
  // var reg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;   // 这个通不过，迷惑
  var reg = /^[0-9a-zA-Z_.]{1,}@[a-zA-Z0-9_.]{1,}[a-zA-Z0-9]{2,4}$/;     // 正解
  return reg.test(sEmail);
}