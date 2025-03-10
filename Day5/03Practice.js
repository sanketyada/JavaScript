//Passing Objects in Function
let userdetail={
    name:"Kirtan",
    age:17,
    work:"JP Morgen and Chase"
}
let fun=function(obj){
    console.log(obj.name)
}
fun(userdetail)  //Kirtan

//Passing Array in Function
let MyArray=[1,"target","Rajesh",true]
let myFun=function(arr){
    console.log(arr[2])
}
myFun(MyArray)  //Rajesh
