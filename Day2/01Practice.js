//symbol-->is a DataType in javascript
const id1 = Symbol('123')
const id2=Symbol('123')

console.log(id1 == id2) //False (even both are same Symbol)

const Num=1234n;
console.log(typeof Num) //BigINt last integers should have n variable.

//String Interpolation
let name="Rajesh Rajghor"
let strInter=`The Name Of Java Teacher is ${name}`
console.log(strInter)