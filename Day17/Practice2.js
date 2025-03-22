//Chaining Promise
new Promise((resolve,rejact)=>{
    setTimeout(()=>{
        resolve({name:"Snaket Yadav",age:21})
    },1000);
})
.then((data)=>{
    console.log(data);
    return data.name;
})
.then(({username})=>{
    console.log(username);
})