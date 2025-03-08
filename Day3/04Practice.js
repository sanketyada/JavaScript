//Array spread Method
let arr1=["Mango","kiwi","Banana","Apple","Grapes"]
let arr2=["Rose","MaryGold","sunflower","Lotous"]

// let arr3=arr1+arr2;
// console.log(arr3)
const Data=[...arr1,...arr2]
console.log(Data)   ///correct Way of Adding Tow Arrayes
// //[
//     'Mango',    'kiwi',
//     'Banana',   'Apple',
//     'Grapes',   'Rose',
//     'MaryGold', 'sunflower',
//     'Lotous'
//   ]

let arr=[1,2,["Rajesh","Kumar"],[2.3,4.33,887,["Hina","Alice"]]]
//to get unique Array and Sove Array inside array it give Singel Array
let Wholearray=[arr.flat(Infinity)]
console.log(Wholearray)