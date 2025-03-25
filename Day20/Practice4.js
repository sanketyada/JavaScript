function Outer(){
    let user="Alice"
    function Inner(){
        console.log(user)  //Childern can use parent property
        let degree="Bachlore of computer Applicaion"
    }
    // console.log(degree) //childern's data can't b eused by Parent
    function Inner2(){
        console.log(degree)  //Brother's can't share data each other
    }
    Inner()
    Inner2()
}
Outer()
// console.log(user) Alice can't access Outside the fuction