console.log(Math.PI)  //3.14
//let change value of PI
Math.PI=23; //assign 23 
console.log(Math.PI)//3.14 --Showing(But we assigend 23)
//here is the Reason
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
//here writable,enumerable, configurable is a False

//defineing Own Object
let obj={
    name:"Alex",
    age:23
}
console.log(Object.getOwnPropertyDescriptor(obj,"name"))
//{ value: 'Alex', 
// writable: true,
// enumerable: true,
//  configurable: true }
//here writable,enumerable, configurable is a True

//let's Change
Object.defineProperty(obj,"name",{
    writable: false,
    enumerable: false,
    configurable: false }
)
console.log(Object.getOwnPropertyDescriptor(obj,"name"))
