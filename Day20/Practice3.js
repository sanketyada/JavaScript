function DisplayData(){
    let name ="Subramanyam.";
    
    function Inner(){
        console.log(name)
    }
    return Inner;
}
let DATA=DisplayData(); //After DisplayData() it get removed from memorybut 
                       // the refrance of Inner function and name stored in DATA.
console.log(DATA)  //Now DATA have Inner function and name
DATA();           //Subramanyam.