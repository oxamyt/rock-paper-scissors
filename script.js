// computer answer
function getComputerChoice (){
   let answers = ['rock', 'paper', 'scissors']
   return answers[Math.floor(Math.random()*answers.length)]
   }
   
   // variables
   let userWin = 'You Win!';
   let computerWin = 'Computer Wins!';
   let draw = 'Draw!';
   let playerScore = 0;
   let computerScore = 0;
   let draws = 0;
   let rock = document.querySelector('#rck');
   let paper = document.querySelector('#pap');
   let scissors = document.querySelector('#srs');
   
   
   
   
   // Events
   rock.addEventListener ('click', () => {
      const computerSelection = getComputerChoice();
      const resultRound = playRound('rock', computerSelection);
      updResult(resultRound);
      if (resultRound === userWin){
         playerScore++;
      }
      else if(resultRound === computerWin){
         computerScore++;
      }
      else if(resultRound === draw){
         draws++;
      }
      score ();
      matchResult();
   })
   paper.addEventListener ('click', () => {
      const computerSelection = getComputerChoice();
      const resultRound = playRound('paper', computerSelection);
      updResult(resultRound);
      if (resultRound === userWin){
         playerScore++;
      }
      else if(resultRound === computerWin){
         computerScore++;
      }
      else if(resultRound === draw){
         draws++;
      }
      score ();
      matchResult();
   })
   scissors.addEventListener ('click', () => {
      const computerSelection = getComputerChoice();
      const resultRound = playRound('scissors', computerSelection);
      updResult(resultRound);
      if (resultRound === userWin){
         playerScore++;
      }
      else if(resultRound === computerWin){
         computerScore++;
      }
      else if(resultRound === draw){
         draws++;
      }
      score ();
      matchResult();
   })


   // match result function
   function matchResult (){
   const matchResult = document.querySelector('#match-result');
      if (playerScore >= 5){
        matchResult.textContent = 'Player Wins the match!';
      }
      else if (computerScore >= 5){
         matchResult.textContent = 'Computer Wins the match!';
      }
      else if (draws >= 5){
         matchResult.textContent = 'Epic match Draw!';
      }
   }
   
   // score function
   function score (){
      const rscore = document.querySelector('#score')
      rscore.textContent = `Score : Player score ${playerScore}, Computer score ${computerScore}, Draws ${draws}`
   }
   
   // result function
   function updResult (resultRound){
   const roundResult = document.querySelector('#round-result')
      roundResult.textContent = `Result : ${resultRound}`; 
   }
   
   // game function
   function playRound(playerSelection, computerSelection){
      if (playerSelection == 'rock' && computerSelection == 'paper'){
   
         return computerWin;
      }
      else if (playerSelection == 'rock' && computerSelection == 'scissors'){
   
         return userWin;
      }
      else if (playerSelection == 'paper' && computerSelection == 'scissors'){
   
         return computerWin;
      }
      else if (playerSelection == 'paper' && computerSelection == 'rock'){
   
         return userWin;
      }
      else if (playerSelection == 'scissors' && computerSelection == 'rock'){
   
         return computerWin;
      }
      else if (playerSelection == 'scissors' && computerSelection == 'paper'){
   
         return userWin;
      }
      else if (playerSelection !== 'rock' && playerSelection !==  'paper' && playerSelection !== 'scissors'){
         alert ('wrong type');
      }
      else {
   
         return draw;
      }
   
   }
   
