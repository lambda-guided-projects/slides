const orderCheeseburger = (goodFortune) => {
  return new Promise((resolve, reject) => {
    if(goodFortune) {
      resolve('your cheeseburger! :)')
    } else {
      reject('out of cheeseburgers. :(')
    }
  })
}


const outcome = orderCheeseburger(true)
  .then(result => {
    return result
  })
  .catch(err => console.log('Reject state:', err))

// calculator example

const calculate = (a,b) => {
  return new Promise((resolve, reject) => {
    if(typeof(a) !== "number" || typeof(b) !== "number") {
      reject('must provide number for arg')
    } else {
      resolve(a + b)
    }
  })
}

const result = calculate(1,2)
  .then(res => {
    console.log(res)
    return res
  })
  .catch(err => console.log(err))

console.log(result)




// write greeting function
// takes 1 arg, name
// if there is no name provided reject
// if there is a name resolve with the greeting and name combined
//

function greet(name) {
  return new Promise((resolve, reject) =>{
    if(name){
      resolve('hello ' + name)
    } else {
      reject('please provide a name')
    }
  })
}

const salutation = greet('Alejandro')
  .then(res => console.log(res))
  .catch(err => console.log(err))

console.log(salutation)
