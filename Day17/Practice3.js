//soving using reject
new Promise((resolve,reject)=>{
    let Datafatched=false;
    if(Datafatched){
        setTimeout(()=>{
            resolve({name:"Sanket Yadav"});
        })
    }
    else{
        reject("Error:Some Error ocurred");
    }
})
.then((Detail)=>{
    console.log(Detail) //if data get fatched (Datafatched=true) resolve call then
})
.catch((err)=>{
    console.log(err)  //if Datafatched is false (Data not fatched) reject will call cathch function
})
.finally(()=>{      //this alway invoked
    console.log("Process Completed");
})