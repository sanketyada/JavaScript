let random=parseInt((Math.random()*100)+1)

const submit=document.getElementById("subt")
const userInput=document.getElementById("guessField");

const prvsGuessSlot=document.getElementById("guesses")
const Remaining=document.getElementById("lastResult")

const LowHi=document.getElementsByClassName("loworHi")
const startover=document.getElementsByClassName("resultParas");

let p=document.createElement('p')

let allguess=[];
let GuessCount=1;

let playGame=true;
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        // console.log(userInput.value)
        const guess=parseInt(userInput.value)
        validateGuess(guess);     
    })
}

function validateGuess(guess){
    if(isNaN(userInput.value)){
        alert("Enter Only Number")
    }
    else if(guess<1){
        alert("Please Enter value more than 1")
    }
    else if(guess>100){
        alert("Please Enter value more than 1")
    }
    else{
        allguess.push(guess);
        if(GuessCount === 11){
            displayGuess(guess)
            displayMassage("GAME OVER")
            endgame();
        }
        else{
            displayGuess(guess)
            CheckGuess(guess)
        }
    }
}

function CheckGuess(guess){
    if(guess===random){
        displayMassage("YOU GUESSED IT RIGHT")
        endgame()
    }
    else if(guess<random){
        displayMassage("YOU GUESSED TOO LESSS")
    }
    else if(guess>random){
        displayMassage("YOU GUESSED TOO MOREE")
    }
}

function displayGuess(guess){
    userInput.value='';
    prvsGuessSlot.innerHTML += `${guess}`
    GuessCount +=1;
    Remaining.innerHTML=`${11-GuessCount}`

}

function displayMassage(message){
    LowHi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
    userInput.value='';
    userInput.setAttribute('disabled');
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame"> Start Now </h2>'
    startover.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){

}