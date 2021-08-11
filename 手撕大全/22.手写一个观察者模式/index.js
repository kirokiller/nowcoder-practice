var events = (function() {
  var topics = {}
  return {
    // 注册监听函数 
    subscribe:function (topic, handler) {
      if(!topics.hasOwnProperty(topic)){
        topics[topic] = []
      }
      topics[topic].push(handler)
    },

    // 发布时间，触发观察者回调事件
    publish: function(topic, info) {
      if(topics.hasOwnProperty(topic)) {
        topics[topic].forEach(function (handler){
          handler(info)
        })
      }
    },

    // 移除主题的一个观察者的回调事件
    remove: function(topic, handler) {
      if(!topic.hasOwnProperty(topic)) return

      var handlerIndex = -1
      topics[topic].forEach(function(item, index){
        if(item === handler){
          handlerIndex = index
        }
      })

      if(handlerIndex >= 0) {
        topics[topic].splice(handlerIndex, 1)
      }
    },

    // 移除主题的所有观察者的回调事件
    removeAll: function (topic) {
      if (topics.hasOwnProperty(topic)) {
        topics[topic] = []
      }
    }
  }
})()


// ES6写法
class Event {
  constructor() {
    this.events = {}
  }
  subscribe(eventName, callback) {
    if(!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback)
  }

  publish(eventName, info) {
    if(this.events[eventName]){
      this.events[eventName].forEach(callback => {
        callback(info)
      })
    }
  }

  remove(eventName, callback) {
    if(this.events[eventName]){
      this.events[eventName].filter(fn => fn!== callback)
    }
  }

  removeAll(eventName) {
    if(this.events[eventName]){
      this.events[eventName] = []
    }
  }
}