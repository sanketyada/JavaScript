//Immediatly invoked function Expression(IIFE)
//main reason to use IIFE to Avoid Global Pollution
//()-->function defination ()-->function Calling
(function greet(){
    console.log("Hii Rajesh")
}) ();//Hii Rajesh

//IIFE for Arrow function
((name)=>{
    console.log(`Welcome ${name}`)
})("Alice");  //Welcome Alice