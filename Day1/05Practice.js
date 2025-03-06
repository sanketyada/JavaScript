//String Conversion While Operation

// (Addition) → Converts to String (if one operand is a string)
let score=123+"12"
console.log(score)  //12312 //String Type
// -, *, /, % → Converts to Number
console.log("5"-2)   //3 number
console.log("5"*3)  //15 number

//with boolean
console.log(true+1)  //2
console.log(false+3)  //0+3=3
console.log(null+100) //100

//undefined
console.log("12"+undefined)  //12undefined
//with all operation it give NaN
console.log("12"*undefined)
console.log(1*undefined)
console.log("nameing"*undefined)
console.log(true*undefined)
console.log("12"*undefined)