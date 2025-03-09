//Object literals are the simplest way of defineing an object in JavaScript using curly braces{}
//1st way singleton//
let obj = new Object({
    name:"Hitesh",
    age:34,
})
//2nd way nonsingleton//
const userDetail={
    name:"Rajesh Rajghor",
    age:33,
    Profession:"Teacher"
}

//Two way of fecthing
console.log(userDetail.name)  //Rajesh Rajghor
console.log(userDetail["name"])  //Rajesh Rajghor


//defineing symbole as key
let Sym = Symbol("mySymb")
let myObj={
    name:"Sanket",
    [Sym]:"One Love",
    status:Symbol("M")
}
console.log(typeof myObj[Sym]) //string
console.log(typeof myObj.status) //symbol