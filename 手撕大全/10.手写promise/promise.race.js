

Promise.race = function(iterator){
  return new Promise((resolve, reject) => {
    for(let item of iterator){
      Promise.resolve(item)
      .then(data => {
        resolve(data)
      })
      .catch(e => {
        reject(e)
      })
    }
  })
}

let p1 = new Promise(resolve => {
  setTimeout(resolve, 105, 'p1 done')
})
let p2 = new Promise(resolve => {
  setTimeout(resolve, 100, 'p2 done')
})
Promise.race([p1, p2]).then(data => {
  console.log(data); // p2 done
})