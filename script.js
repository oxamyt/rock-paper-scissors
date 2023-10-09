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

// game function
function playRound(playerSelection, computerSelection){
   if (playerSelection == 'rock' && computerSelection == 'paper'){
      alert ('You Lost!');
      return computerWin;
   }
   else if (playerSelection == 'rock' && computerSelection == 'scissors'){
      alert ('You Win!');
      return userWin;
   }
   else if (playerSelection == 'paper' && computerSelection == 'scissors'){
      alert ('You Lost!');
      return computerWin;
   }
   else if (playerSelection == 'paper' && computerSelection == 'rock'){
      alert ('You Win!');
      return userWin;
   }
   else if (playerSelection == 'scissors' && computerSelection == 'rock'){
      alert ('You Lost!');
      return computerWin;
   }
   else if (playerSelection == 'scissors' && computerSelection == 'paper'){
      alert ('You Win!');
      return userWin;
   }
   else if (playerSelection !== 'rock' && playerSelection !==  'paper' && playerSelection !== 'scissors'){
      alert ('wrong type');
   }
   else {
      alert ('draw')
      return draw;
   }

}

function game(){
const playerSelection = prompt('Choose a tool').toLowerCase().trim();
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);

if (result === userWin){
   playerScore++;
}
else if(result === computerWin){
   computerScore++;
}
else if(result === draw){
   draws++;
}
console.log(`Player Score ${playerScore}`);
console.log(`Computer Score ${computerScore}`);
console.log(`Draws ${draws}`);

if (playerScore >= 5 || computerScore >= 5 || draws >=5){
   gameScore(playerScore, computerScore, draws)
}
else {
   game()
}

} 

function gameScore(playerScore, computerScore, draws){
   if (playerScore >= 5){
      console.log('You have won the game!')
   }
   else if (computerScore >= 5){
      console.log('Computer have won the game!')
   }
   else if (draws >= 5){
      console.log('GREAT DRAW')
   }
}

game();