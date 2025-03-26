class EmployerDetail{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    Pays(){
        console.log(`The Salary of employer is ${this.salary}`)
    }
    Age(){
        console.log(`The Age of employer is ${this.age}`)
    }
}

let employer1 = new EmployerDetail("Aaditya",23,23000);
employer1.Pays()
employer1.Age()

// //If the Facility of Classes does not Exist
// class StudnetDetail{
//     constructor(name,age,Studentyet){
//         this.name = name;
//         this.age = age;
//         this.Studentyet=Studentyet
//     }
// }
// StudnetDetail.prototype.detail= function (Studentyet){
//     console.log(`${this.Studentyet} student yet!`)
// }

// let student1 = new StudnetDetail("Ravish",54,"Not")
// student1.detail()