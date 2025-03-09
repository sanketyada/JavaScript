//This Keyword
let myobj={
    name:"Sanket Yadav",
    age:21,
    work:'softwere Engineer',
    status:function(){
        console.log(`UserName is ${this.name}`)
        //Here this refers to Current Context
        console.log(this);
        // {
        //     name: 'Sanket Yadav',
        //     age: 21,
        //     work: 'softwere Engineer',
        //     status: [Function: status]
        //   }
    }
}
myobj.status()//

Object.freeze(myobj) //Now nobody can perform any activity on this Object