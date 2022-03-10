let playerScore = 0;
let computerScore= 0;




//function plays one round of  RPS
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'rock' && computerSelection == 'scissors') {
        return "you win!";
        
    } else if (playerSelection === computerSelection){
        return "you tied!";
    } else {
            return "you lose!";
            
    }        
} 
//plays multiple rounds of RPS up to 5.
function game(){
    for(let i=0; i<5; i++) {
        let compPlay = ['rock', 'scissors', 'paper'];
        computerSelection = compPlay[Math.floor(Math.random() * compPlay.length)];
        playerSelection = prompt("choose rock, paper, or scissors.");
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection))
        
        let roundResult = playRound(playerSelection, computerSelection)
        if(roundResult == "you win!"){
            playerScore++;
        } else if (roundResult == "you lose!"){
            computerScore++;
        } else {
            null;
        }
        
    }
gameEnd(playerScore, computerScore);
console.log(gameEnd(playerScore, computerScore));
}
game();
console.log(playerScore);
console.log(computerScore);
//triggers end of game based on scores.



function gameEnd(playerScore, computerScore){
    if(playerScore === computerScore){
        return "its a draw!"
    } else if(playerScore > computerScore){ 
        return "you win the game!"
    } else {
        return "you lose the game!"
    }
}




    
