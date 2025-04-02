// let todo=[];
// let req=prompt('Enter Your Request for Todo List.')
// while(true){
//     if(req =="quit"){
//         alert("You Quited");
//         break;
//     }
//     if(req =="list"){
//         for(i=0 ; i<todo.length ; i++){
//             console.log(todo[i]);
//         }
//     }
//     else if(req =="add"){
//         let task=prompt("Add Your Task.");
//         todo.push(task);
//     }
//     else if(req =="delete"){
//         let idx=prompt('Enter Index you wanna Delete.')
//         todo.splice(idx,1);
//     }
//     req=prompt('Enter Your Request for Todo List.');
    
// }

// let arr=[1,2,3,4,4,5];
// for(let i=0 ; i< arr.length ;i++){
//     if(arr[i] ==2){
//         arr.splice(i,1);
//     }
// }
// console.log(arr)

// let num=123;
// let copy = num;
// let sum=0
// let digit=0
// while(copy >0){
//     let digit=copy%10;
//     console.log(digit)
//     sum=sum+digit
//     copy = Math.floor(copy/10);
// }
// console.log(sum)

// let limit = prompt("How Much Number You wanna Generate.")
// let GeneratedGuess=Math.floor(Math.random()*limit)+1;
// console.log(GeneratedGuess)
// let guess=prompt("Guess You Number.")
// while(true){
   
//     if(guess =="quit"){
//         console.log("You Quited");
//         break;
//     }
//     if(guess ==GeneratedGuess){
//         console.log("You guessed it right")
//         break;
//     }
//     else if(guess >GeneratedGuess){
//         alert("You Guessed Larger");
//         guess=prompt("Guess You Number Again.")
//     }
//     else if(guess <GeneratedGuess){
//         alert("You Guessed Smaller");
//         guess=prompt("Guess You Number Again.");
//     }
//     else{
//         console.log("Wrong guess");
//         guess=prompt("Guess You Number Again.")
//     }
// }

// //Object Assingment
// let randomNumber=Math.floor(Math.random()*6)+1
// console.log(randomNumber);

// let Car={
//     name:"Fortuner",
//     model:"legender",
//     color:"White"
// }
// console.log(Car.name)
// console.log(Car["name"])

// let person = {
//     name:"Alex",
//     age:34,
//     city:"Washington DC",
// }
// person.city="New York";
// console.log(person)
// person.country="United State";
// console.log(person)

//Function
// function RollDice(){
//     let dice=Math.floor(Math.random()*6)+1;
//     console.log(dice);
// }
// RollDice();

// function Average(n1,n2,n3){
//     let ave=(n1+n2+n3)/3;
//     console.log(ave)
// }
// Average(6,6,6)
// function Table(n){
//     for(let i=1; i<=10;i++){
//         console.log(i*n);
//     }
// }
// Table(2)

// function SumN(n){
//     let sum=0;
//     for(let i=0;i<=n; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(SumN(30))


// function concat(arr){
//     let str="";
//     for(let i=0 ; i<arr.length ;i++){
//         str = str+arr[i];
//     }
//     return str
// }
// console.log(concat(["Rahat","indori","dikii","Jat"]))

//High order Function

// function FactoryFunction(req){
//     if(req == "odd"){
//         return function(n){
//             console.log(!(n%2==0))
//         }
//     }
//     else if(req =="even"){
//         return function(n){
//             console.log(n%2==0)
//         }
//     }
//     else{
//         return console.log("Wrong Selection")
//     }
// }
// let fun = FactoryFunction("odd")
// fun(2)
// let odd = function(n){
//     console.log(n%2==0)
// }
// odd(3)

//method
// Calculator={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     }
// }
// console.log(Calculator.add(12,12))

//Assingment
// function ArrayLarger(arr,n){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] >n){
//             console.log(arr[i]);
//         }
//     }
// }
// ArrayLarger([1,2,3,4,5],2)

// function UniqueStr(str){
//     let newStr="";
//     for(let i=0; i<str.length; i++){
//         if(!(newStr.includes(str[i]))){
//             newStr=newStr+str[i];
//         }
//     }
//     return newStr
// }
// let retValue=UniqueStr("Saaaanket")
// console.log(retValue)

// function LongCountry(arr){ 
//     let str="";
//     for(let i=0 ;i<arr.length ;i++){
//         if(arr[i].length > str.length)
//         {
//             str=arr[i]
//         }
//     }
//     console.log(str);
// }
// LongCountry(["Indiasssssssssssss","Pajwehwhlwj","Baxxxxxxxxxxxn","Taja"]);


// function Vowelcounter(str){
//     let Vowel=["a","e","i","o","u"];
//     let counter=0;
//     for(let i=0 ;i<str.length ;i++){
//         for(let j=0; j<Vowel.length ;j++){
//             if(Vowel.includes(str[i])){
//                 counter++;
//             }
//         }
//     }
//     console.log(counter)
// }
// Vowelcounter("Sanket");

// function Vowelcounter(str){
//     let Vowel=["a","e","i","o","u"];
//     let counter=0;
//     for(let i=0 ;i<str.length ;i++){
//         if(["a","e","i","o","u"].includes(str[i])){
//             counter++;
//         }
//     }
//     console.log(counter)
// }
// Vowelcounter("Saaaaanket")


// //Random Number Between 10-20
// function RandomNumber(start,end){
//     let diff=end-start
//     let num=Math.floor(Math.random()*diff)+start
//     console.log(num)
// }
// RandomNumber(10,20)

// let Sum =(a,b)=>( a+b)


// let val=Sum(10,20);
// console.log(val)

// let id=setInterval(()=>{
//     console.log("Sanket Yadav");
// },2000);

// clearTimeout(id)

// let Square=n=>n*n
// console.log(Square(6))

// function SayHello(){
//   for(let i=0 ;i<5 ;i++){
//     setInterval(()=>{
//         console.log("Hello")
//     },2000)
//   }
// }
// SayHello()

// let Hello=()=>{
//     for(let i=0 ; i<5 ; i++){
//         setInterval(()=>{
//         console.log("Hellow")
//         },2000);
//     }  
//     }

// Hello()

// let ArrayAverage =(arr)=>{
//     let sum=0;
//     for(let i=0 ; i<arr.length ;i++){
//         sum=sum+arr[i]
//     }
//     return sum/arr.length
// }
// console.log(ArrayAverage([1,2,3]));

// let IsEven = (n)=>{
//     if(n % 2==0){
//         return true;
//     }
// }
// if()
// console.log(IsEven(4))

// const object={
//     message:'Hello,World!',
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000)

// let arr=[1,2,3,4,5,6]
// // let data=arr.map((el)=>{
// //     return el>2;
// // })
// // console.log(data)
// // let data1=arr.every((el)=>{
// //     return el>2;
// // })
// // console.log(data1)
// let arr3=[1,2,3,4]
// let retvalue=arr3.reduce((a,c)=>{
//     console.log(`a=${a} b=${c}`)
//     return a*c;

// },1)
// console.log(retvalue)

// let value=[1,20,30,40].every((el)=>el%10==0)
// console.log(value)

// let arr=[1,0,23,43,475,12,24]
// let value=arr.reduce((max,el)=>{
//     if(max<el){
//        return max;
//     }
//     else{
//         return el
//     }
// });
// console.log(value)

// let arr=[1,2,3,4,5];
// let newArray=[];

// newArray=arr
// console.log(newArray)

// let array2=[...arr]
// console.log(array2)

// function Sum(...args){
//     console.log(args)
// }
// Sum(10,20,20,202)

// let obj={
//     name:"Sanket Yadav",
//     age:21,
//     id:1,
// }
// let {name,age}=obj;
// console.log(name)
// console.log(age)
// console.log(obj.id)

// let fun = (arr)=>{
//     let sum=0;
//     for(let i=0; i<arr.length ; i++){
//         sum=sum+(arr[i]*arr[i])
//     }
//     let ave=sum/arr.length;
//     console.log(ave)
//     console.log(sum)
// }

// fun([1,2])

// let arr=[1,2,3,4,5];
// let value=arr.map((el)=>{
//     return el+5;
// })

// console.log(value)

// function UpperCase(arr){
//     let newArr=[];
//     for(let i=0 ;i<arr.length; i++){
//         if(arr[i].toUpperCase()==arr[i]){
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr);
// };
// UpperCase(["RAMESH","SHIV","shivshanker","Rajkumar","PRANJAL"]);


// function doubleAndReturnArgs(arr,...args){
//     let newArr=[];
//     let data=args.map((el)=>{
//         return el*2;
//     })
//     newArr.push(...arr,...data);
//     console.log(newArr)
// }
// doubleAndReturnArgs([1,2,3,4,5],12,13,14,15);

function mergeObject(obj1,obj2){
    let obj3={...obj1,...obj2}
    console.log(obj3)
}
mergeObject({name:"Snaket",school:"SGM"},{id:1,age:21})