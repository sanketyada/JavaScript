//This Keyword in Function
let fun=function(){
    let name="Ravish Kumar";
    console.log(this) //return all small proprty of function
}
fun()

//This in arrow Function
let myFun=()=>{
    let username="Tina dabi";
    console.log(this)
}
myFun()  //{} here it gives empty object

//Scopeing
//Var-->Globally accessible
//let const -->accessibel inside the block
let Hero="Aryan";
{
    var Actress="Laxmi jain";
    let Hero="Akshy Kumar";
    let villane="Amrish"
    console.log(Hero)  //Akshy Kumar
}

console.log(Hero) //Aryan
console.log(Actress)  //Laxmi jain
// console.log(villane)  // villane is not defined