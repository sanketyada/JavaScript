//We know in JavaScript at the end all are Object .
//function --->object--->null
//Array --->object--->null
//String --->object--->null

//Adding Method using  prototype in constructor Function
// function bhi ek Object hai to eske bhi prototype honge to 
// .prototype access karke properties ya another function add kar sakte hai
function studentDetail(name,age){
    this.name=name;
    this.age=age;
    return this;
}
studentDetail.prototype.greet=function(){
    console.log(`Welcome ${this.name}`)
}
studentDetail.prototype.studentname=function(){
    console.log(`Here user name is ${this.name}`)
}

let student1 = new studentDetail("Alix",45);
console.log(student1);
student1.greet()
student1.studentname()

let student2 = new studentDetail("BOb marley",32);
console.log(student1);
student1.greet()
student1.studentname()