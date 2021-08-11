
function shallowClone(obj) {
  if(!obj || typeof obj !== 'object') return
  let newObj = Array.isArray(obj) ? [] : {}
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

function deepClone(obj) {
  if(!obj || typeof obj !== 'object') return obj;
  let newObj  = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

let obj = {
  age: 1,
  jobs: {
    first: 'FE',
  },
  schools: [
    {
      name: 'shenda',
    },
    {
      name: 'shiyan',
    },
  ],
  arr: [
    [
      {
        value: '1',
      },
    ],
    [
      {
        value: '2',
      },
    ],
  ],
}
console.log(deepClone(obj))


