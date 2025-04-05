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
         p.style.color='red'
      },250)
      p.style.color='black'

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