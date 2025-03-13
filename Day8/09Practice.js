//Reduce Method
// arr.reduce(callback(accumulator,currentValue),initialValue)
let arr=[1,2,3,4,5]
let retrunValue=arr.reduce(function(acc,curr){
    return acc+curr;
},0)
console.log(retrunValue) 
//sum of 1,2,3,,4,5

//with arrow function
let rValue=arr.reduce((acc,curr)=>acc+curr,0)
console.log(rValue);
