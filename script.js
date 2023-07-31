
//select Dom elements
let btn=document.querySelectorAll('.button');
let playerElement=document.querySelector('#player');
let computerElement=document.querySelector('#computer');
let resultElement=document.querySelector('#result');
let resetBtn=document.querySelector('#reset');
let player;
let computer;

//create player functionality

btn.forEach(btn=>btn.addEventListener("click", function(){

    player=btn.innerHTML;
    playerElement.innerHTML=player;

   computer= computerChoice();
   computerElement.innerHTML=computer;
   showResult();
    
}))

//create the computer function

function computerChoice(){

   let computerValue= Math.floor(Math.random() * 3);



   if(computerValue==1){
    return 'rock';
   }
   else if(computerValue==2){
    return 'scissor';
   }
   else{
    return 'paper';
   }

}

//create function to show result of a game

function showResult(){
    if(computer==player){
        resultElement.innerHTML='you tied';
    }
    else if(player=='scissor' && computer=='paper'){
        resultElement.innerHTML='you win';
    }
    else if(player=='rock' && computer=='scissor'){
        resultElement.innerHTML='you win';
    }
    else if(player=='paper' && computer=='rock'){
        resultElement.innerHTML='you win';
    }
    else{
        resultElement.innerHTML='you lost'
    }
}

//reset all the dom elements by an event to the reset button

resetBtn.addEventListener("click", function(){
    playerElement.innerHTML='';
    computerElement.innerHTML='';
    resultElement.innerHTML='';
})