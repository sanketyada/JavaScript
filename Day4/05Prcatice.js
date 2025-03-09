//Spread method
const obj={
    name:"Snaket Yadav"
}
const obj1={
    age:21
}

const obj3={...obj,...obj1}
console.log(obj3)  //{ name: 'Snaket Yadav', age: 21 }

//Object.key
console.log(Object.keys(obj))  //[ 'name' ] array of key
//Object.entries
console.log(Object.entries(obj)) //[ [ 'name', 'Snaket Yadav' ] ] It makes array of indivdual key-value Pair
//hasOwnProperty
console.log(obj.hasOwnProperty('name'))  //true bcz onj{} have name Property

//DeStructureing
let userDetail={
    name:"Anmol Singh",
    subjectTeacher:"Social Science",
    attandence:true
}
const{name,attandence}=userDetail
console.log(name)  //Anmol Singh
console.log(attandence)  //true