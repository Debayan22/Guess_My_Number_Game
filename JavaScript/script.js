'use strict';

//console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 21;
// document.querySelector('.score').textContent = 3;


// document.querySelector('.guess').value = 21;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highscore = 0;
 let number = Math.trunc(Math.random()*20)+1;
 

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  if(guess > 20 ){
    document.querySelector('.message').textContent = 'Please enter a number between 0 to 20...';
    //document.querySelector('body').style.backgroundColor = '#ac1b1b';
  }
  else if(!guess){
    document.querySelector('.message').textContent = 'Please Enter a Number...';
  }else if(guess === number){
     document.querySelector('.message').textContent = 'Correct Number';
     document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.number').style.width = '30rem';
     document.querySelector('.number').textContent = number;
     if(score > highscore){
       highscore = score;
       document.querySelector('.highscore').textContent = highscore;
     }

    
  }
   else if(guess !== number){

     if(score > 1){
      document.querySelector('.message').textContent = guess > number ? 'Too high' : 'Too Low';
      score--;
       document.querySelector('.score').textContent = score;
    
    }
      else{
       document.querySelector('.message').textContent = 'Oops you Lost The Game';
       //document.querySelector('.message').textContent = 'Please enter a number between 0 to 20...';
       document.querySelector('.score').textContent = 0;
     }
     
   } 
  
  

  
});

//Reseting the game

document.querySelector('.again').addEventListener('click' , function(){
  score = 20;
  let number = Math.trunc(Math.random()*20)+1;
   document.querySelector('.message').textContent = "Start Guessing...";
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  
  
  
;  
  
  
})