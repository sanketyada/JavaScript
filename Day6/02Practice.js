//More on Arrow function
//Explicit return
let greet=(name)=>{
    return `WellCome ${name}!`
}
console.log(greet("Dyna")) //Calling

//Inplicit return
let info=(a,b)=> `Sum =${a+b}`
console.log(info(90,45)) //Calling


//returning object
let rtnobj=()=>{
   return {name:"Code With Carry"}
} 
console.log(rtnobj())  //{ name: 'Code With Carry' }