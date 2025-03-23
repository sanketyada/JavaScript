//constructor Function
function Car(name,price,mailage){
    this.name=name;
    this.price=price;
    this.mailage=mailage;
    return this
}
let car1=Car("Tata Nexon",120000,12) //No use new keyword means no new object created.
console.log(car1)
let car2=Car("Fortuner",500000,7)  //Last value of this keyword overwrite
console.log(car2) 



//How we declare a number
let marks = new Number(97);
console.log(marks)

//here js have pribuilt constructor function for Number
//So that we can access values by ne keyword