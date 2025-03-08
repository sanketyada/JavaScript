//Array opration
let arr= new Array("Mango",200,"Kiwi",230)
console.log(arr)
console.log(arr.length)

arr.pop()
console.log(arr)  //[ 'Mango', 200, 'Kiwi' ]

arr.push("Bob Marlay")
console.log(arr)   ///[ 'Mango', 200, 'Kiwi', 'Bob Marlay' ]

arr.unshift(90)
console.log(arr)  // Added in begining [ 90, 'Mango', 200, 'Kiwi', 'Bob Marlay' ]

arr.shift()
console.log(arr)   // Remove from Begining[ 'Mango', 200, 'Kiwi', 'Bob Marlay' ]

console.log(arr.includes("Mango"))  //true

console.log(arr.indexOf("Kiwi"))  //2