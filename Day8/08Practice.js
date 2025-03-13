//Map
//like filter it does not need any Truthy value
let arr=[1,'Armaan Malik',45,"Mumbai Maharastra"];

let returnedValue= arr.map((item)=>{
    return item
})
console.log(returnedValue) //[ 1, 'Armaan Malik', 45, 'Mumbai Maharastra' ]

//Chaining
let arr1=[1,2,3,4,5,6,7,8,9,10]

let rValue=arr1.map((item)=>item*10).map((item)=>item+1)
console.log(rValue)