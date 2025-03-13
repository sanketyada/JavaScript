//Array specific Loops

//for of method

const arr=[1,2,3,4,5]
for(let i of arr){
    console.log(i)
}
//1 2 3 4 5 
const str="Satvil Mishra"
for(let i of str){
    console.log(i)
}
//S a t v i k M i s h r a
let obj={
    name:"Randeep",
    age:23,
}
//Note: Object are Not iterable using thsi method 
//to iterate on object use for in method
