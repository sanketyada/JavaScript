function StudentDetail(name,age){
    this.name=name;
    this.age=age;
    return this;
}
StudentDetail.prototype.greet=function(){
    console.log(`Welcome ${this.name}!`);
}
StudentDetail.prototype.StuAge=function(){
    console.log(this.age);
}
let student1 = new StudentDetail("Sanket Yadav",21);
student1.greet()
console.log(student1);

let student2 = new StudentDetail("Dakshin",14);
student2.greet()
student2.StuAge()