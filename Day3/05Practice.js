//IsArray
let name="Sanket"
let arr=[12,34,4,5,"Raje"]
console.log(Array.isArray(name))  //False
console.log(Array.isArray(arr))   //True

//ArrayFrom
let username="Rajkumar"
let k=Array.from(username)
console.log(k)
// //[
//     'R', 'a', 'j',
//     'k', 'u', 'm',
//     'a', 'r'
//   ]

//ArrayOf
let n1=12;
let n2=45;
let uname="raje"
let data=908.8
let j=Array.of(n1,n1,uname,data)
console.log(j)  //[ 12, 12, 'raje', 908.8 ]
