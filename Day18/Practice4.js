//constructor Function
function userDetail(name,age,address){
    this.name=name;
    this.age=age;
    this.address=address;
    return this;
}
let user1= new userDetail("Lexi",23,"Washington DC"); //Here we create new user using new keyword that store all value in this keyword
console.log(user1);  //userDetail { name: 'Lexi', age: 23, address: 'Washington DC' }
let user2= new userDetail("Alex",3,"Amstrudum");  //Here it will not overWrite values
console.log(user2);   //userDetail { name: 'Alex', age: 3, address: 'Amstrudum' }
