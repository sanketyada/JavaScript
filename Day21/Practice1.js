//Call and this in JavaScript
function setUsername(username){
    this.username=username
    console.log("Called");
}
function createUser(username,age,address){
    //we are making another function for seting username
    -setUsername.call(this,username);  //We have to use .call while calling and pass this for current contaxt 
    //createUser Function to setUsername;
    this.age=age;
    this.address=address;
    return this;
}

let student1 = new createUser("Sanket Yadav",21,"Kariya Gopal pur");
console.log(student1)