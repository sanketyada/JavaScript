// // let newp=document.createElement('p')
// // newp.innerText="Hey I'm Red!"
// // newp.classList.add("red")
// // document.body.appendChild(newp)

// // let h3 = document.createElement('h3')
// // h3.innerText="I'm a blue h3!"
// // h3.classList.add('blue')
// // document.body.appendChild(h3)

// // let newDiv=document.createElement('div')
// // newDiv.classList.add("box")
// // document.body.appendChild(newDiv)

// // let h1=document.createElement('h1')
// // let p=document.createElement('p')

// // h1.innerText="I'm in a div"
// // p.innerText="ME TOO!"
// // newDiv.appendChild(h1)
// // newDiv.appendChild(p)

// let btn = document.createElement("button")
// btn.innerText="Click Me"
// btn.setAttribute('id','btn')
// document.body.appendChild(btn)
// console.log(btn)

// let input=document.createElement('input')
// input.setAttribute('placeholder',"username")
// document.body.appendChild(input)

// let button = document.querySelector('#btn')
// console.log(button)
// button.style.backgroundColor="blue"
// button.style.color="white"

// let h1= document.createElement('h1')
// h1.innerText="DOM Practice"
// h1.classList.add('h1')
// document.body.prepend(h1)

// let p = document.createElement('p');
// p.innerHTML="Apna Collage <span> Delta </span> Practice"
// document.body.appendChild(p)

// let btn=document.querySelector("#btn");
// let box= document.querySelector(".container")
// let heading=document.querySelector("h1")

// let fun=function(){
//     let r= generateColor()
//     let g= generateColor()
//     let b= generateColor()
//     box.style.backgroundColor=`rgb(${r},${g},${b})`;
//     heading.innerText=`rgb(${r},${g},${b})`
// }
// function generateColor(){
//     let r= Math.floor(Math.random()*255)+1
//     return r
// }
// btn.addEventListener("click",fun)

// let h1 = document.querySelector('h1')
// let p = document.querySelector('p');
// let button = document.querySelector('button')

// h1.addEventListener("click",changeColor)
// p.addEventListener("click",changeColor)
// button.addEventListener("click",changeColor)

// function changeColor(e){
//     console.log(this)
//     console.log(e)
// }

// let form=document.querySelector('form')
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let inputUser=document.querySelector("#user")
//     let inputPass=document.querySelector("#pass")
//     console.log(inputUser.value)
//     console.log(inputPass.value)
//     console.log(form.elements[0].value)
//     console.log(form.elements[1].value)

// })

// let username=document.querySelector('#user')
// username.addEventListener("change",function(){
//     console.log(this.value)
// })

// let box = document.querySelector(".container")
// let input = document.querySelector("input")
// box.addEventListener("mouseout",function(){
//     console.log("Box");
// })
// input.addEventListener("load",function(){
//     console.log("Inputed");
// })
// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
//   });

// let btn = document.createElement('button')
// btn.innerText="Click ME!"
// document.body.appendChild(btn)
// btn.addEventListener("click",(e)=>{
//    e.target.style.backgroundColor="green"
  
// })

// let ul=document.querySelector('ul')
// ul.addEventListener('click',()=>{
//    console.log("ul Clicked")
// });

// let lists = document.querySelectorAll('li')
// for( list of lists){
//    list.addEventListener('click',function(event){
//       console.log("List Is Clicked")
//       this.style.cursor="pointer"
//       // event.stopPropagation();
//    });
// }
// let form=document.querySelector('form')
// let task=document.querySelector("#task")
// let ul=document.querySelector("ul")
// form.addEventListener('submit',function(e){
//    e.preventDefault()
//    addlist(task.value)
//    task.value=""

// })
// function addlist(data){
//    let newList=document.createElement('li')
//    newList.innerText=data
//    ul.appendChild(newList)

//    let delbtn=document.createElement('button')
//    delbtn.classList.add('deletebtn')
//    delbtn.innerText="Delete"
//    newList.appendChild(delbtn)
   
//    //deletelist(delbtn)
// }
// function deletelist(delbtn){
//    delbtn.addEventListener('click',function(e){
//       delbtn.parentElement.remove()
//    })
// }

// ul.addEventListener('click',function(e){
//    console.log(e.target.nodeName)
//    if(e.target.nodeName =='BUTTON'){
//       e.target.parentElement.remove()
//    }
//    else{
//       console.log(e.target)
//    }
// })
let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","sky","blue"]
let level=0;
let oldlevel=0;
let p = document.querySelector('p')
let h2 = document.querySelector('h2')
let started=false

document.addEventListener('keypress',function(){
   if(started == false){
      started=true;
      levelUp();
   }

})
function levelUp(){
   userSeq=[];
   level++;
   p.innerText=`Level=${level}`
   
   let randIdx=Math.floor(Math.random()*4);
   let randColor=btns[randIdx]
   let randBtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor)
   console.log(gameSeq)
   gameflash(randBtn)
}
function gameflash(btn){
   btn.classList.add('flash')
   setTimeout(function(){
      btn.classList.remove('flash')
   },250)
}

function userflash(btn){
   btn.classList.add('userflash')
   setTimeout(function(){
      btn.classList.remove('userflash')
   },250)
}

let allbtns=document.querySelectorAll('.btn')
for(btn of allbtns){
   btn.addEventListener('click',btnPress)
}

function btnPress(e){
   let btn  = this;
   // console.log(this.id)
   userColor=btn.getAttribute("id")
   userSeq.push(userColor)
   userflash(btn)
   checkAns(userSeq.length-1);
}
function checkAns(idx){
   // let idx=level-1;
   if(gameSeq[idx] == userSeq[idx]){
      if(gameSeq.length == userSeq.length){
         setTimeout(()=>{
           levelUp(); 
           highScore(level)
         },1000)
         
      }
      console.log("Same Value")
   }else{
      p.innerHTML=`Game Over! <b> Score ${level}</b> <br> Press any Key to start.`
      reset();
      let body=document.querySelector('body')
      body.style.backgroundColor='red'
      setTimeout(()=>{
         body.style.backgroundColor='rgb(72, 88, 88)'
      },250)
      p.style.color='red'

   }
}
function reset(){
   gameSeq=[];
   userSeq=[];
   started=false;
   level=0;
}

function highScore(level){
   if(level > oldlevel){
      oldlevel=level
      h2.innerText=`Highest Score:${oldlevel}`;
   }
}