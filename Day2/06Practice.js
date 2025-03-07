//Date in JavaScript
let mydate=new Date()
console.log(mydate)  // 2025-04-06T16:44:19.268Z
console.log(mydate.toLocaleTimeString())  //10:15:02 PM
console.log(mydate.toTimeString())  //22:16:18 GMT+0530 (India Standard Time)
console.log(mydate.toJSON(0))  //2025-03-06T16:46:51.264Z


let date= new Date()
console.log(date)  //2025-03-06T16:48:11.981Z
console.log(date.getTime())  //1741279721282  Time from 2023-1-1
console.log(date.getFullYear())
console.log(date.getDay())
console.log(date.getMinutes())

//Declareing Own Date
const Mydate = new Date("December 9, 2003 03:24:00");
console.log(Mydate)

//Note:
//Date.now() return date from 1 jan 1970 in millisecond
//Date()     return Current date
//Date(" ")    we can also inject own Customized Date