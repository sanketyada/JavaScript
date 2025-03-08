//Array Operation 2
let arr = new Array(12,"Peter Paker","Iron Man",43.7)

let k= arr.join()
console.log(k) //Type:string 12,Peter Paker,Iron Man,43.7

console.log(arr.slice(1,4));  //Slice of Array [ 'Iron Man', 43.7 ]

//arr.splice(startindex,deleteCount)
console.log(arr.splice(1,3))  //from indx 1 to 3 Element get deleted//[ 'Peter Paker', 'Iron Man', 43.7 ]
//

//Now original array is
console.log(arr)  //[ 12 ] becoause all element deleted by splice method