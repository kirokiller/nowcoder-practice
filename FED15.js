/* 描述
设置文字颜色
请使用嵌入样式将所有p标签设置为红色文字 */

const nodelist = document.getElementsByTagName("p");
Array.from(nodelist).forEach(node => {
  node.style.color="red"
})