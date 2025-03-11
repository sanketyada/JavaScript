//Using function in Object

let obj={
    name:"Alaxnader",
    collage:"Oxford university",
    userDetail:function(){  //Normal Function
        console.log(`Student is ${this.name}`)  //Student is Alaxnader
        console.log(this) //Current contaxt
    },
    userEdu:()=>{
        console.log(`The Collage of ${this.name} is ${this.collage}`)  
        //The Collage of undefined is undefined
        console.log(this) //{}
    }

}
obj.userDetail()
obj.userEdu()