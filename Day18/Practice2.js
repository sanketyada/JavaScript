// const userDetail={
//     name:"Iron Man",
//     age:21,
//     isLoggedIn:true,
//     username:function(){
//         console.log(`${name} is a SuperHero`);
//     }
// }
// console.log(userDetail.username())  //ReferenceError: name is not defined

//So we will use this keyWord to provide current contaxt
const userOne={
    name:"Iron Man",
    age:21,
    isLoggedIn:true,
    username:function(){
        console.log(`${this.name} is a SuperHero`);
    }
}
console.log(userOne.username())  //Iron Man is a SuperHero
console.log(this) //-->{}
//for user2
const userTwo={
    name:"SuperMan",
    age:21,
    isLoggedIn:true,
    username:function(){
        console.log(`${this.name} is a SuperHero`);
    }
}
console.log(userTwo.username())  //SuperMan is a SuperHero

//It means for 1000 users we have to create 1000 object 
//here the concept on cunstuctor function came into focus-->Practice3.js


