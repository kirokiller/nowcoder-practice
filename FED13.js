/* 描述
使用一个标签将“牛客网”三个字加粗显示

html
<p>牛客网，程序员必备求职神器</p>
*/
let pdom = document.getElementsByTagName('p')[0];
  let textdom = pdom.firstChild;
  textdom.nodeValue = textdom.nodeValue.replace('牛客网', '');
  const strongdom = document.createElement("strong");
  strongdom.textContent = '牛客网';
  pdom.insertBefore(strongdom, textdom);

  /* (function(w,d){
    let p = document.querySelector('p')
    p.innerHTML = `<strong>牛客网</strong>${p.innerText.replace(/牛客网/, '')}`
})(window,document) */