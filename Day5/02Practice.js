//Passing arrguments
function greet(name){
    return `Welcome ${name}!`
}

let run=greet("Alice")
console.log(run)  //Welcome Alice!

//Passing Multiple Arguments
function mulArg(...price){
    return price;
}
let runn=mulArg(1,2,3,4,5); //Passing Multiple values
console.log(runn)  //[ 1, 2, 3, 4, 5 ] return Array