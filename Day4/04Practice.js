//concatnation of two Object
let obj1={
    name:"Alice Marley",
    qualification:"M phile",
    age:32
}

let obj2={
    user:"Bob",
    Degree:"BA Hons",
    Rank:36
}
//Here
let obj3={obj1,obj2}
console.log(obj3)
// // It gives Object inside Object{
//   obj1: { name: 'Alice Marley', qualification: 'M phile', age: 32 },
//   obj2: { user: 'Bob', Degree: 'BA Hons', Rank: 36 }
// }

//Object.assign
const newObj=Object.assign({},obj1,obj2)
console.log(newObj)
// //{
//     name: 'Alice Marley',
//     qualification: 'M phile',
//     age: 32,
//     user: 'Bob',
//     Degree: 'BA Hons',
//     Rank: 36
//   }
//Note: Key Can't repeated so both objects keys should be unique