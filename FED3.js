
  /* 
描述
查找两个节点的最近的一个共同父节点，可以包括节点自身
输入描述：
oNode1 和 oNode2 在同一文档中，且不会为相同的节点
*/

function commonParentNode(oNode1, oNode2) {
  let oNode1Parent = oNode1;
  let oNode2Parent = oNode2;
  while(oNode1Parent || oNode2Parent){
    if(oNode1Parent && oNode1Parent.contains(oNode2)){
      return oNode1Parent;
    } else if(oNode2Parent && oNode2Parent.contains(oNode1)){
      return oNode2Parent;
    }
    oNode1Parent = oNode1Parent && oNode1Parent.parentNode;
    oNode2Parent = oNode1Parent && oNode1Parent.parentNode;
  }
}

var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
const { document } = (new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)).window;
function test() { 
  var parent = document.createElement('DIV');
  var a = document.createElement('DIV');
  var b = document.createElement('DIV');
  parent.appendChild(a); parent.appendChild(b);
  var c = commonParentNode(a, b);  
  return c === parent; 
}

console.log(test());


/* 
  使用jsdom模拟browser环境
  https://www.npmjs.com/package/jsdom
*/


