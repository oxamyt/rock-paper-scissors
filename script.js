function getComputerChoice (){
let answers = ['rock', 'paper', 'scissors']
return answers[Math.floor(Math.random()*answers.length)]
}

console.log(getComputerChoice())