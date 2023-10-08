function getComputerChoice (){
let answers = ['rock', 'paper', 'scissors']
return answers[Math.floor(Math.random()*answers.length)]
}

const playerSelection = prompt('Choose a tool').toLowerCase().trim();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
   if (playerSelection == 'rock' && computerSelection == 'paper'){
      alert('you loose')
   }
   else if (playerSelection == 'rock' && computerSelection == 'scissors'){
      alert('you win')
   }
   else if (playerSelection == 'paper' && computerSelection == 'scissors'){
      alert('you loose')
   }
   else if (playerSelection == 'paper' && computerSelection == 'rock'){
      alert('you win')
   }
   else if (playerSelection == 'scissors' && computerSelection == 'rock'){
      alert('you loose')
   }
   else if (playerSelection == 'scissors' && computerSelection == 'paper'){
      alert('you win')
   }
   else if (playerSelection !== 'rock' && playerSelection !==  'paper' && playerSelection !== 'scissors'){
      alert ('wrong type')
   }
   else {
      alert('not win, not loose')
   }

}



playRound(playerSelection, computerSelection)