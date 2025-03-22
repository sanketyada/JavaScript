//Using Async await for Acting on Promises
let myPromise=new Promise((resolve,reject)=>{
    let dataFatced=false;
    if(dataFatced){
        setTimeout(()=>{
            resolve({username:"Peter Parkar"});
        },1000); 
    }
    else{
        reject("Error:Some Error Occured");
    }

})
// async function ReviewPromises() {
//     const response = await myPromise
//     console.log(response)
// }
// ReviewPromises();

//using try catch for acting on error
async function ReviewPromises(){
    try{
        let response = await myPromise
        console.log(response)
    }
    catch(err){
        console.log(err)
    }
}
ReviewPromises();