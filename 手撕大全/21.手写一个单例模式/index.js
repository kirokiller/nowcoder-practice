/* 
  单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点
*/
class SingleTon {
  constructor(name) {
    this.name = name
    this.instance = null
  }

  static getInstance(name) {
    if (!this.instance) {
      this.instance = new SingleTon(name)
    }
    return this.instance;
  }
}

var oA = SingleTon.getInstance('Lee')
var oB = SingleTon.getInstance('Fan')
console.log(oA === oB) // true


/* 
  static 关键字解释：类相当于实例的原型， 所有在类中定义的方法， 都会被实例继承。 如果在一个方法前， 加上 static 关键字， 就表示该方法不会被实例继承， 而是直接通过类来调用， 这就称为“ 静态方法”。
*/