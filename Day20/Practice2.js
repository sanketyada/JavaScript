//function --->object--->null
//Array --->object--->null
//String --->object--->null
//at the End Object is Parent let  inject a function in parent
Object.prototype.ProgrammingL=function(){
    console.log("Programming language is JavaScript");
}

//Accessing by Array
let arr = new Array(1,2,3,4,5)
console.log(arr)   //[ 1, 2, 3, 4, 5 ]
arr.ProgrammingL() //Programming language is JavaScript


//Accessing by Object
let obj={
    name:"Aamir Khan",
    age:67,
}
console.log(obj)  //{ name: 'Aamir Khan', age: 67 }
obj.ProgrammingL()  //Programming language is JavaScript

//Accessing by String
let str = new String('Nick Jones')
console.log(str)  //[String: 'Nick Jones']
str.ProgrammingL()  //Programming language is JavaScript