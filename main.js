let compPlay = ['rock', 'scissors', 'paper'];
let compAnswer = compPlay[Math.floor(Math.random()*compPlay.length)];



function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return `You tie, computer chose ${compAnswer}`;
    } 
    
}

let playerSelection = prompt('Lets play Rock, Paper, Scissors! Please type your answer.');
let computerSelection = compAnswer;
console.log(playRound(playerSelection, computerSelection));