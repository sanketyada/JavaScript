//Functions are Block of code that Performs specific Tasks,They are reusable
//and can be called from diffrent part of code
//These are Two Way of Defineing Function

//1 directly//
function isLoggedIn(){
    console.log("User is Logged In")
}
isLoggedIn() //function call

//2 Storeing in variable//
let myFun=function(){
    console.log("R. MadhWan")
}
myFun()

//function with return value
let fun=function(){
    return `My Name Is Bob`
}

let run=fun()
console.log(run) //My Name Is Bob