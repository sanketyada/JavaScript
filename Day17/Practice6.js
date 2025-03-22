async function fetching(){
    try{
        let data= await fetch("https://api.github.com/users/sanketyada")  //try with ttps://api.github.com/users/sanketyada
        let k= await data.json()
        console.log(k)
    }
    catch(err){
        console.log("Error Found")
    }

}
fetching();