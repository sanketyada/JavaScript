//Filter
//Note: We Use it for Returning the Values
let arr=[1,2,3,4,5,6];
arr.filter((item)=>{
    console.log(item)
})

//it Also return value
//Eplicit return
let returnedValue=arr.filter((item)=>{
    return item;
})
console.log(returnedValue)  //[ 1, 2, 3, 4, 5, 6 ]

//Implicit return
let retrunValue=arr.filter((item)=>item>2);  //filter can used for impose conditions on values
console.log(retrunValue)
//[ 3, 4, 5, 6 ]