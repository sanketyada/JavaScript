//Fatching Data
fetch('https://api.github.com/users/sanketyada')  ////try with ttps://api.github.com/users/sanketyada
.then((data)=>{
    return data.json();
})
.then((data)=>{ 
    console.log(data)
})
.catch((err)=>{
    console.log("Error")
})
.finally(()=>{
    console.log("All Process Compleated.")
})