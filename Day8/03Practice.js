//For in method
//Note: it works to iterate over object
//Note2: for in not works with Map
let obj={
    name:"Rayon Mules",
    age:43,
    nationality:"Pakistani"
}
for (let i in obj){
    console.log(i)
}
//return only key
// name
// age
// nationality

//for values also
for (let i in obj){
    console.log(obj[i])
}
//now it return values 
// Rayon Mules
// 43
// Pakistani