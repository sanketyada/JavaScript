////for Each

// arr.forEach(function(){

// });

// on array
const arr=[1,"Keval","SBM","Natraj Market"]
arr.forEach((i)=>{
    console.log(i)
})


//does for Each Retun value
// let k=arr.forEach((i)=>{
//     return i
// })
// console.log(k)
//No for each Not return value So for Returning Values Use Filter and Map

//Object in array
let arr2=[
    {
        name:"Denmark",
        cost:"78$"
    },
    {
        originCountry:"India"
    },
    "Vinna World Travel company"
    
]
arr2.forEach(function(item){
    console.log(item.name) //Denmark
})
arr2.forEach(fun);

//OR defining function outside
let fun=function(item){
    console.log(item)
}
arr2.forEach(fun); // givr only referance of funtcion