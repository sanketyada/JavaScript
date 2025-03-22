// //Promises in JavaScript
// //The Promise object represent the eventual completion (or failurs) of an Synchronus
// //Operation it's Resulting values.

// // let Promise = new Promise(callback)

// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Tony Stark");
//         resolve();
//     },2000)
// })
// //Tony Stark will Appear here after 2 sec because promises make the code Asyncronus

let newPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({name:"Rajan Naik"})
    },1000)
})
newPromise.then((user)=>{
    console.log(user);
    return user.name
})

//Without Variable
new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({name:"Genter Govon",age:21});
    },1000)
})
.then((data)=>{ //directly without storing in any Variable
    console.log(data)
})