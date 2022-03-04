let compPlay = ['rock', 'scissors', 'paper'];
let compAnswer = compPlay[Math.floor(Math.random()*compPlay.length)];



function playRound(finalPlayerSelection, computerSelection) {
    if (computerSelection === finalPlayerSelection) {
        return `You tie, computer chose ${compAnswer}`;
    } else if(computerSelection == 'paper' && finalPlayerSelection == 'rock'){
        return `you lose, computer chose ${compAnswer}`;
    } else if(computerSelection == 'rock' && finalPlayerSelection == 'scissors'){
        return `you lose, computer chose ${compAnswer}`;
    } else if(computerSelection == 'scissors' && finalPlayerSelection == 'paper'){
        return `you lose, computer chose ${compAnswer}`;
    } else if(computerSelection == 'paper' && finalPlayerSelection == 'scissors'){
        return `you win, ${playerSelection} beats ${compAnswer}`;
    } else if(computerSelection == 'rock' && finalPlayerSelection == 'paper'){
        return `you win, ${playerSelection} beats ${compAnswer}`;
    } else if(computerSelection == 'scissors' && finalPlayerSelection == 'rock'){
        return `you win, ${playerSelection} beats ${compAnswer}`;
    } else {
        return undefined;
    }
    
}

let playerSelection = prompt("let's play rock, paper, scissors!");
let finalPlayerSelection = playerSelection.toLowerCase();
let computerSelection = compAnswer;
console.log(playRound(playerSelection, computerSelection));